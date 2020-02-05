import React, { useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';
import ImageFeedList from '~/Components/ImageFeedList';

const SearchBar = Styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width}px;
    flex-direction: row;
    align-items: center;
`;

const Feeds = ({ navigation }) => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [ feedList, setFeedList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setFeedList(getMyFeed(24));
    }, []);
    
    return (
        <ImageFeedList
            feedList={feedList}
            loading={loading}
            onRefresh={() => {
                setLoading(true);
                setTimeout(() => {
                    setFeedList(getMyFeed(24));
                    setLoading(false);
                }, 2000);
            }}
            onEndReached={() => {
                setFeedList([ ...feedList, ...getMyFeed(24) ]);
            }}
            onPress={() => {
                navigation.navigate('FeedListOnly');
            }}
        />
    )
};

Feeds.navigationOptions = {
    headerTitle: () => (
        <SearchBar>
            <Input
                style={{ flex: 1, marginLeft: 8, height: 32 }}
                placeholder="search"
            />
            <IconButton iconName="camera" />
        </SearchBar>
    ),
    headerBackTitle: null,
};

export default Feeds;