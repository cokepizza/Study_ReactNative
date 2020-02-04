import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #FEFFFF;
`;

const FormContainer = Styled.View`
    flex: 1;
    width: 100%:
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

const Logo = Styled.Text`
    color: #292929;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
`;

const PasswordReset = Styled.Text`
    width: 100%;
    color: #3796EF;
    text-align: right;
    margin-bottom: 24px;
`;

const SignupText = Styled.Text`
    color: #929292;
    text-align: center;
`;

const SignupLink = Styled.Text`
    color: #3796EF;
`;

const Footer = Styled.View`
    width: 100%;
    border-top-width: 1px;
    border-color: #D3D3D3;
    padding: 8px;
`;

const Copyright = Styled.Text`
    color: #929292;
    text-align: center;
`;

const Login = ({ navigation }) => {
    return (
        <Container>
            <FormContainer>
                <Logo>SNS App</Logo>
                <Input style={{ marginBottom: 16 }} placeholder='Email' />
                <Input
                    style={{ marginBottom: 16 }}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <PasswordReset
                    onPress={() => navigation.navigate('PasswordReset')}
                >
                    Password Reset
                </PasswordReset>
                <Button
                    label="Login"
                    style={{ marginBottom: 24 }}
                    onPress={() => {
                        AsyncStorage.setItem('key', 'JWT_KEY');
                        navigation.navigate('MainNavigator');
                    }}
                />
                <SignupText>
                    Want to Sign Up?{' '}
                    <SignupLink onPress={() => navigation.navigate('Signup')} >
                        Register
                    </SignupLink>
                </SignupText>
            </FormContainer>
            <Footer>
                <Copyright>SNSapp from LSJ</Copyright>
            </Footer>
        </Container>
    );
};

Login.navigationOptions = {
    header: null,
};

export default Login;