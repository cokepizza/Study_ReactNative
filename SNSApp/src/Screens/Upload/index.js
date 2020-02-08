import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components/native';

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';
import ImageFeedList from '~/Components/ImageFeedList';

const SearchBar = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const Upload = ({ navigation }) => {
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
    );
};

Upload.navigationOptions = {
    title: '사진 업로드',
};

export default Upload;