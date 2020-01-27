import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text``;

const EmptyItem = () => {
    return (
        <Container>
            <Label> Press the plus button to register a new task </Label>
        </Container>
    );
};

export default EmptyItem;