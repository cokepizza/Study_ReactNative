import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Styled from 'styled-components/native';

const Container = Styled.View`
    margin: 8px 0px;
`;

const InfoContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
`;

const Title = Styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
`;

const CatalogContainer = Styled.View`
    height: 201px;
`;

const CatalogImageContainer = Styled.TouchableOpacity`
    padding: 0px 4px;
`;

const CatalogImage = Styled.Image``;

const SubCatalogList = ({ title, url, onPress }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json.data.movies);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            </InfoContainer>
            <CatalogContainer>
                <FlatList
                    horizontal={true}
                    data={data}
                    keyExtractor={( item, index ) => {
                        return `catalogList-${item.id}-${index}`;
                    }}
                    renderItem={({ item, index }) => {
                        <CatalogImageContainer
                            activeOpacity={1}
                            onPress={() => {
                                onPress(item.id);
                            }}>
                            <CatalogImage
                                source={{ url: item.large_cover_image }}
                                style={{ width: 136, height: 201 }}
                            />
                        </CatalogImageContainer>
                    }}
                />
            </CatalogContainer>
        </Container>
    );
};

export default SubCatalogList;