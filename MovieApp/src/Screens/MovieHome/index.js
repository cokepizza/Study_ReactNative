import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';

import Logout from '~Assets/Images/logout.png';
import BitCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
    flex: 1;
    background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image`
`;

const MovieHome = ({ navigation }) => {
    const _logout = () => {
        AsyncStorage.removeItem('key');
        navigation.navigate('LoginNavigator');
    };

    useEffect(() => {
        navigation.setParams({
            logout: _logout,
        });
    }, []);
    
    return (
        <Container>
            <BitCatalogList
                url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
                onPress={id => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />
            <SubCatalogList
                title="최근 등록순"
                url="https://tys.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
                onPress={id => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />
            <SubCatalogList
                title="평점순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
                onPress={id => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />
            <SubCatalogList
                title="다운로드순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
                onPress={id => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />
        </Container>
    );
};

MovieHome.navigationOptions = ({ navigation }) => {
    const logout = navigation.getParam('logout');
    return {
        title: 'MOVIEAPP',
        headerTintColor: '#70915',
        headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitle: null,
        headerRight: (
            <StyleButton
                onPress={() => {
                    if (logout && typeof logout === 'function') {
                        logout();
                    }
                }}
            >
                <Icon source={Logout} />
            </StyleButton>
        ),
    };
};

export default MovieHome;