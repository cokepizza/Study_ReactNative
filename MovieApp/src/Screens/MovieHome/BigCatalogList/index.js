import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import BigCatalog from '~Components/BigCatalog';

const Container = Styled.View`
    height: 300px;
    margin-bottom: 8px;
`;

const BigCatalogList = ({ url, onPress }) => {
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
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={data}
                keyExtractor={( item, index ) => {
                    return `bigScreen-${index}`;
                }}
                renderItem={({ item, index }) => (
                    <BigCatalog
                        id={item.id}
                        image={item.large_cover_image}
                        year={item.year}
                        title={item.title}
                        genres={item.genres}
                        onPress={onPress}
                    />
                )}
            />
        </Container>   
    );
};

export default BigCatalogList;