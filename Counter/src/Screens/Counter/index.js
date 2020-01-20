import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = styled.Text`
    font-size: 24px;
`;

const CountContainer = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Counter = ({ title, initValue }) => {
    const [ count, setCount ] = useState(0);

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <CountContainer>
                <CountLabel>{initValue + count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={() => setCount(count + 1)} />
                <Button iconName="minus" onPress={() => setCount(count - 1)}/>
            </ButtonContainer>
        </Container>
    );
};

export default Counter;