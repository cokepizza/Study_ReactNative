import React, { useState, useContext, useEffect } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native';
import Styled from 'styled-components/native';

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

import GridIcon from '~/Assets/Images/grid.png';
import TagIcon from '~/Assets/Images/tag.png';

const ProfileTabContainer = Styled.View`
    flex-direction: row;
    background-color: #FEFFFF;
`;

const FeedContainer = Styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const ImageContainer = Styled.TouchableHighlight`
    background: #FEFFFF;
    padding: 1px;
`;

const Profile = ({ navigation }) => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [ feedList, setFeedList ] = useState([]);
    const imageWidth = Dimensions.get('window').width / 3;
    const tabs = [ GridIcon, TagIcon ];

    useEffect(() => {
        setFeedList(getMyFeed(24));
    }, []);

    const isBottom = ({
        layoutMeasurement,
        contentOffset,
        contentSize,
    }) => {
        //  layoutMeasurement.height은 단말기의 보이는 크기(높이)
        //  contentOffset.y는 해당 컨텐츠안에서 읽어 내려온 높이
        //  contentSize.height는 말 그대로 컨테츠의 높이
        return layoutMeasurement.height + contentOffset.y >= contentSize.height;
    }

    return (
        <ScrollView
            // 여기서는 헤더로 고정되는 것이 ProfileTabContainer가 된다
            stickyHeaderIndices={[2]}
            onScroll={event => {
                if (isBottom(event.nativeEvent)) {
                    setFeedList([ ...feedList, ...getMyFeed(24) ]);
                }
            }}>
            <ProfileHeader
                image="http://api.randomuser.me/portraits/women/68.jpg"
                posts={3431}
                follower={6530}
                following={217}
            />
            <ProfileBody
                name="Sara Lambert"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <ProfileTabContainer>
                {tabs.map((image, index) => (
                    <Tab
                        key={`tab-${index}`}
                        selected={index === 0}
                        imageSource={image}
                        imageStyle={{ width: 20, height: 20 }}
                    />
                ))}
            </ProfileTabContainer>
            <FeedContainer>
                {feedList.map((feed, index) => (
                    <ImageContainer
                        key={`feed-list-${index}`}
                        style={{
                            paddingLeft: index % 3 === 0 ? 0 : 1,
                            paddingRight: index % 3 === 2 ? 0 : 1,
                            width: imageWidth,
                        }}
                    >
                        <Image
                            source={{ uri: feed ? feed.images[0]: '' }}
                            style={{ width: imageWidth, height: imageWidth }}
                        />
                    </ImageContainer>
                ))}
            </FeedContainer>
        </ScrollView>
    );
};

Profile.navigationOptions = ({ navigation }) => {
    return {
        title: 'Profile',
        headerRight: () => (
            <IconButton
                iconName="menu"
                onPress={navigation.openDrawer}
            />
        )
    };
};

export default Profile;