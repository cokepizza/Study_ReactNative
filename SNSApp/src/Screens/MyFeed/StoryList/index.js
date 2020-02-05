import React from 'react';
import { FlatList } from 'react-native';

import Styled from 'styled-components/native';
import StoryBackgroundImage from '~/Assets/Images/story_background.jpg';

const StoryContainer = Styled.View`
    padding: 8px;
    width: 72px;
`;

const Story = Styled.View`
    width: 56px;
    height: 56px;
    border-radius: 56px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

const StoryBackground = Styled.Image`
    position: absolute;
`

const StoryImage = Styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

const StoryName = Styled.Text`
    width: 100%;
    text-align: center;
`;

const StoryList = ({ storyList }) => {
    return (
        <FlatList
            data={storyList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => {
                return `story-${index}`
            }}
            renderItem={({ item, index }) => {
                <StoryContainer>
                    <Story>
                        <StoryBackground
                            // style={{ width: 20, height: 20 }}
                            source={StoryBackgroundImage}
                        />
                        <StoryImage
                            source={{ uri: item.photo }}
                            style={{ width: 52, height: 52 }}
                        />
                    </Story>
                    <StoryName numberOfLines={1}>{item.name}</StoryName>
                </StoryContainer>
            }}
        />
    );
};

export default StoryList;