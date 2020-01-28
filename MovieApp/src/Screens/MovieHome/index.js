import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';

import BitCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
    flex: 1;
    background-color: #141414;
`;
