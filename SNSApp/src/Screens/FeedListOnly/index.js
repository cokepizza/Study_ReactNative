import React, { useContext, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import Feed from '~/Components/Feed';

const FeedListOnly = ({ navigation }) => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [ feedList, setFeedList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setFeedList(getMyFeed());
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
                    setLoading(false);
                }, 2000);
            }}
            onEndReached={() => {
                setFeedList([ ...feedList, ...getMyFeed() ]);
            }}
            onEndReachedThreshold={0.5}
            refreshing={loading}
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

FeedListOnly.navigationOptions = {
    title: '둘러보기',
    headerTintColor: '#292929',
}

export default FeedListOnly;