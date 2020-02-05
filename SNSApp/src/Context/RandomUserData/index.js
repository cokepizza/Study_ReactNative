import React, { createContext, useState, useEffect } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = Styled.View`
    flex: 1;
    background-color: #FEFFFF;
    align-items: center;
    justify-content: center;
`;

const RandomUserDataContext = createContext({
    getMyFeed: number => {
        return [];
    },
});

const RandomUserDataProvider = ({ cache, children }) => {
    const [ userList, setUserList ] = useState([]);
    const [ descriptionList, setDescriptionList ] = useState([]);
    const [ imageList, setImageList ] = useState([]);

    const getCacheData = async (key) => {
        const cachedData = await AsyncStorage.getItem(key);
        if (cache === false || cachedData === null) {
            return undefined;
        }
        const cacheList = JSON.parse(cachedData);

        if(cacheList.length !== 25) {
            return undefined;
        }

        return cacheList;
    };

    const setCacheData = (key, data) => {
        AsyncStorage.setItem(key, JSON.stringify(data));
    };

    const setUsers = async() => {
        const cachedData = await getCacheData('UserList');
        if(cachedData) {
            setUserList(cachedData);
            return;
        }

        try {
            const response = await fetch('https://uinames.com/api/?amount=25&ext');
            const data = await response.json();
            setUserList(data);
            setCacheData('UserList', data);
        } catch(error) {
            console.log(error);
        }
    };

    const setDescriptions = async () => {
        const cachedData = await getCacheData('DescriptionList');
        if (cachedData) {
            setDescriptionList(cachedData);
            return;
        }

        try {
            const response = await fetch('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=25');
            const data = await response.json();
            
            let text = [];
            for(const index in data.quotes) {
                text.push(data.quotes[index].quote);
            }

            setDescriptionList(text);
            setCacheData('DescriptionList', text);
        } catch(error) {
            console.log(error);
        }
    };

    const setImages = async () => {
        const cachedData = await getCacheData('ImageList');
        if (cachedData) {
            if (Image.queryCache) {
                Image.queryCache(cachedData);
                cachedData.map(data => {
                    Image.prefetch(data);
                });
            }
            setImageList(cachedData);
            return;
        }

        setTimeout(async () => {
            try {
                const response = await fetch('https://source.unsplash.com/random/');
                const data = response.url;
                if(imageList.indexOf(data) >= 0) {
                    setImages();
                    return;
                }
                setImageList([ ...imageList, data ]);
            } catch(error) {
                console.log(error);
            }
        }, 400);
    };

    useEffect(() => {
        setUsers();
        setDescriptions();
    }, []);

    useEffect(() => {
        if (imageList.length !== 25) {
            setImages();
        } else {
            setCacheData('ImageList', imageList);
        }
    }, [imageList]);

    const getImages = () => {
        let images = [];
        const count = Math.floor(Math.random() * 4);

        for (let i=0; i<=count; ++i) {
            images.push(imageList[Math.floor(Math.random() * 24)]);
        }

        return images;
    }

    const getMyFeed = (number = 10) => {
        let feeds = [];
        for(let i=0; i<number; ++i) {
            const user = userList[Math.floor(Math.random() * 24)];
            feeds.push({
                name: user.name,
                photo: user.photo,
                description: descriptionList[Math.floor(Math.random() * 24)],
                images: getImages(),
            });
        }
        return feeds;
    }

    console.log(`${userList.length} / ${descriptionList.length} / ${imageList.length}`);

    return (
        <RandomUserDataContext.Provider
            value={{
                getMyFeed,
            }}>
            {userList.length === 25 &&
            descriptionList.length === 25 &&
            imageList.length === 25 ? (
                children
            ) : (
                <Loading>
                    <ActivityIndicator color="#D3D3D3" size="large" />
                </Loading>
            )}
        </RandomUserDataContext.Provider>
    );
};

export { RandomUserDataProvider, RandomUserDataContext };