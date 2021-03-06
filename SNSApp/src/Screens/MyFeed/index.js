import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';
import StoryList from './StoryList';

const Container = Styled.View`
    flex-direction: row;
`;

const MyFeed = ({ navigation }) => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [ feedList, setFeedList ] = useState([]);
    const [ storyList, setStoryList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setFeedList(getMyFeed());
        setStoryList(getMyFeed());
    }, []);

    return (
        <FlatList
            data={feedList}
            keyExtractor={(item, index) => {
                return `myfeed-${index}`;
            }}
            showsVerticalScrollIndicator={false}
            onRefresh={() => {
                setLoading(true);
                setTimeout(() => {
                    setFeedList(getMyFeed());
                    setStoryList(getMyFeed());
                    setLoading(false);
                }, 2000);
            }}
            onEndReached={() => {
                setFeedList([ ...feedList, ...getMyFeed() ]);
            }}
            onEndReachedThreshold={0.5}
            refreshing={loading}
            listHeaderComponent={<StoryList storyList={storyList} />}
            renderItem={({ item, index }) => (
                <Feed
                    id={index}
                    name={item.name}
                    photo={item.photo}
                    description={item.description}
                    images={item.images}
                />
            )}
        />
    );
};

MyFeed.navigationOptions = {
    title: 'SNS App',
    headerLeft: () => (<IconButton iconName="camera" />),
    headerRight: () => (
        <Container>
            <IconButton iconName="live"/>
            <IconButton iconName="send"/>
        </Container>
    ),
};

export default MyFeed;