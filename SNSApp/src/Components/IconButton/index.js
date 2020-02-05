import React from 'react';
import Styled from 'styled-components/native';
import Camera from '~/Assets/Images/camera.png';
import Live from '~/Assets/Images/live.png';
import Send from '~/Assets/Images/send.png';
import DotMenu from '~/Assets/Images/dotMenu.png';
import Favorite from '~/Assets/Images/favorite.png';
import Comment from '~/Assets/Images/comment.png';
import Bookmark from '~/Assets/Images/bookmark.png';
import Menu from '~/Assets/Images/menu.png';

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image`
    width: 25px;
    height: 25px;
`;

const IconButton = ({ iconName, style, onPress }) => {
    const imageSource = {
        camera: Camera,
        live: Live,
        send: Send,
        dotMenu: DotMenu,
        favorite: Favorite,
        comment: Comment,
        bookmark: Bookmark,
        menu: Menu,
    };

    return (
        <Container
            style={style}
            onPress={() => {
                if(onPress && typeof onPress === 'function') {
                    onPress();
                }
            }}>
            <Icon source={imageSource[iconName]} />
        </Container>
    );
};

export default IconButton;