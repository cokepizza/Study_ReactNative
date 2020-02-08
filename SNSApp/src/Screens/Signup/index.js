import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #FEFFFF;
`;
const FormContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 32px;
`;

const Description = Styled.Text`
    text-align: center;
    font-size: 12px;
    color: #929292;
    margin: 0px 8px;
`;

const TabContainer = Styled.View`
    flex-direction: row;
    margin-bottom: 16px;
`;

const Footer = Styled.View`
    width: 100%;
    border-top-width: 1px;
    border-color: #D3D3D3;
    padding: 8px;
`;

const FooterDescription = Styled.Text`
    color: #929292;
    text-align: center;
`;

const GoBack = Styled.Text`
    color: #3796EF;
`;

const Signup = ({ navigation }) => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const tabs = ['전화번호', '이메일'];

    return (
        <Container>
            <FormContainer>
                <TabContainer>
                    {tabs.map((label, index) => (
                        <Tab
                            key={`tab-${index}`}
                            selected={tabIndex === index}
                            label={label}
                            onPress={() => setTabIndex(index)}
                        />
                    ))}
                </TabContainer>
                <Input
                    style={{ marginBottom: 16 }}
                    placeholder={tabIndex === 0 ? '전화번호' : '이메일'}
                />
                <Button label="다음" style={{ marginBottom: 24 }} />
                {tabIndex === 0 && (
                    <Description>
                        SNS App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있다.
                    </Description>
                )}
            </FormContainer>
            <Footer>
                <FooterDescription>
                    이미 계정이 있나요?{' '}
                    <GoBack onPress={() => navigation.goBack()} >로그인</GoBack>
                </FooterDescription>
            </Footer>
        </Container>
    );
};

Signup.navigationOptions = {
    headerShown: false,
};

export default Signup;