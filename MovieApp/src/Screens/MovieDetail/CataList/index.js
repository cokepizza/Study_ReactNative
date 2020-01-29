import React from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View``;
const Title = Styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    padding: 24px 16px 8px 16px;
`;

const CastContainer = Styled.View`
    padding: 0px 4px;
`;

const CastImage = Styled.Image``;
const LabelName = Styled.Text`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 4px 2px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

const CataList = ({ cast }) => {
    return (
        <Container>
            <Title>배우</Title>
            <FlatList 
                horizontal={true}
                data={cast}
                keyExtractor={ (item, index) => {
                    return `cataList-${index}`;
                }}
                renderItem={ ({ item, index }) => (
                    <CastContainer>
                        <CastImage
                            source={{ uri: item.url_small_image }}
                            style={{ width: 100, height: 150 }}
                        />
                        <LabelName>{item.name}</LabelName>
                    </CastContainer>
                )}
            />
        </Container>
    );
};

export default CataList;

