import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    background-color: #EFEFEF;
    justify-content: center;
    align-items: center;
`;

const CheckLogin = ({ navigation }) => {
    AsyncStorage.getItem('key')
        .then(value => {
            if(value) {
                navigation.navigate('MainNavigator');
            } else {
                navigation.navigate('LoginNavigator');
            }
        })
        .catch(error => {
            console.log(error);
        });

    return <Container />
};

CheckLogin.navigationOptions = {
    header: null,
}

export default CheckLogin;