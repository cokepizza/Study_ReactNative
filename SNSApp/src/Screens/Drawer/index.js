import React from 'react';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import CameraIcon from '~/Assets/Images/camera.png';
import LiveIcon from '~/Assets/Images/live.png';
import FavoriteIcon from '~/Assets/Images/favorite.png';
import ProfileIcon from '~/Assets/Images/Combine.png';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #FEFFFF;
`;

const Header = Styled.View`
    border-bottom-width: 1px;
    border-color: #D3D3D3;
    padding: 8px 16px;
`;

const Title = Styled.Text``;

const Button = Styled.TouchableHighlight`
    padding: 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const Icon = Styled.Image`
    margin-right: 8px;
`;

const Label = Styled.Text`
    font-size: 16px;
`;

const Footer = Styled.View`
    position: absolute;
    bottom: 32px;
    width: 100%;
    border-top-width: 1px;
    border-color: #D3D3D3;
`;

const Drawer = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <Title>Sara Lambert</Title>
            </Header>
            <Button>
                <ButtonContainer>
                    <Icon source={CameraIcon} style={{ width: 20, height: 20 }}/>
                    <Label>사진</Label>
                </ButtonContainer>
            </Button>
            <Button>
                <ButtonContainer>
                    <Icon source={LiveIcon} style={{ width: 20, height: 20 }}/>
                    <Label>라이브</Label>
                </ButtonContainer>
            </Button>
            <Button>
                <ButtonContainer>
                    <Icon source={FavoriteIcon} style={{ width: 20, height: 20 }}/>
                    <Label>팔로워</Label>
                </ButtonContainer>
            </Button>
            <Footer>
                <Button
                    onPress={() => {
                        AsyncStorage.removeItem('key');
                        navigation.navigate('CheckLogin');
                    }}>
                    <ButtonContainer>
                        <Icon
                            source={ProfileIcon}
                            style={{ width: 20, height: 20 }}
                        />
                        <Title>로그아웃</Title>
                    </ButtonContainer>
                </Button>
            </Footer>
        </Container>
    );
};

export default Drawer;