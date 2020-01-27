import React from 'react';
import Styled from 'styled-components/native';
import RemoveIcon from '~/Assets/Images/remove.png';

const Container = Styled.View`
    flex-direction: row;
    background-color: #FFF;
    margin: 4px 16px;
    padding: 8px 16px;
    border-radius: 8px;
    align-items: center;
`;

const Label = Styled.Text`
    flex: 1;
`;

const DeleteButton = Styled.TouchableOpacity``;

const Icon = Styled.Image`
    width: 24px;
    height: 24px;
`;

const TodoItem = ({ text, onDelete }) => {
    return (
        <Container>
            <Label>{text}</Label>
            <DeleteButton onPress={onDelete}>
                <Icon source={RemoveIcon}/>
            </DeleteButton>
        </Container>
    );
};

export default TodoItem;