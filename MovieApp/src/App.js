import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from '~/Screens/Navigator';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <Navigator />
        </>
    );
};

export default App;