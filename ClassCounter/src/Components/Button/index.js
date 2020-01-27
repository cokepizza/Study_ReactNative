import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity``;
const Icon = styled.Image``;

const Button = ({ iconName, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                        ? require('~Assets/Images/add.png')
                        : require('~Assets/Images/remove.png')
                }
            />
        </Container>
    );
};

export default Button;