import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Navigator from '~/Screens/Navigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    });

    return (
        <>
            <StatusBar barStyle="light-content"/>
            <Navigator />
        </>
    );
};

export default App;