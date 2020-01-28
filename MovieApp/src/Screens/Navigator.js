import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CheckLogin from '~Screens/CheckLogin';
import Login from '~Screens/Login';
import MovieHome from '~Screens/MovieHome';
import MovieDetail from '~Screens/MovieDetail';

const LoginNavigator = createStackNavigator({
    Login,
});

const MovieNavigator = createStackNavigator({
    MovieHome,
    MovieDetail,
});

const AppNavigator = createSwitchNavigator(
    {
        CheckLogin,
        LoginNavigator,
        MovieNavigator,
    },
    {
        initialRouteName: 'CheckLogin',
    }
);

export default createAppContainer(AppNavigator);