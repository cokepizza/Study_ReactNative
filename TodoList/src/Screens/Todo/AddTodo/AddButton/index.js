import React from 'react';
import Styled from 'styled-components/native';
import AddIcon from '~/Assets/Images/add.png';

const Contaienr = Styled.SafeAreaView`
    position: absolute;
    bottom: 0;
    align-self: center;
    justify-content: flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

const Icon = Styled.Image``;

const AddButton = ({ onPress }) => {
    return (
        <Contaienr>
            <ButtonContainer onPress={onPress}>
                <Icon source={AddIcon} />
            </ButtonContainer>
        </Contaienr>
    );
};

export default AddButton;