import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    flex: 1;
    border-bottom-width: 1px;
    border-color: #929292;
    padding-bottom: 8px;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text`
    font-size: 16px;
    color: #929292;
    text-align: center;
`;

const TabImage = Styled.Image`
    margin-top: 8px;
`;

const Tab = ({ selected, label, imageSource, onPress }) => {
    let color = selected ? '#292929' : '#929292';

    return (
        <Container
            activeOpacity={1}
            style={{ borderColor: color }}
            onPress={onPress}>
            {label && <Label style={{ color }} >{label}</Label>}
            {imageSource && <TabImage source={imageSource}/>}
        </Container>
    )
};

export default Tab;