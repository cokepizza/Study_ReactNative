import React from 'react';
import { Image } from 'react-native';
import Home from '~/Assets/Images/Tabs/home.png';
import HomeFocused from '~/Assets/Images/Tabs/home_focused.png';
import Search from '~/Assets/Images/Tabs/search.png';
import SearchFocused from '~/Assets/Images/Tabs/search_focused.png';
import Upload from '~/Assets/Images/Tabs/upload.png';
import UploadFocused from '~/Assets/Images/Tabs/upload_focused.png';
import Notification from '~Assets/Images/Tabs/notification.png';
import NotificationFocused from '~Assets/Images/Tabs/notification_focused.png';
import Profile from '~/Assets/Images/Tabs/profile.png';
import ProfileFocused from '~/Assets/Images/Tabs/profile_focused.png';


import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '`/Screens/Feeds`';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import Drawer from '~Screens/Drawer';

const LoginNavigator = createStackNavigator({
    Login,
    SignUp,
    passwordReset,
});

const MyFeedTab = createStackNavigator({
    MyFeed,
});

const FeedsTab = createStackNavigator({
    Feeds,
    FeedListOnly,
});

const UploadTab = createStackNavigator({
    Upload,
});

const ProfileTab = createStackNavigator({
    Profile,
});

const MainTabs = createBottomTabNavigator({
    MyFeed: {
        screen: MyFeedTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image
                    source={
                        focused
                            ? HomeFocused
                            : Home
                    }
                />
            ), 
        },
        tabBarOptions: {
            showLabel: false,
        },
    },
    Feeds: {
        screen: FeedsTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image
                    source={
                        focused
                            ? SearchFocused
                            : Search
                    }
                />
            )
        },
        tabBarOptions: {
            showLabel: false,
        },
    },
    Upload: {
        screen: UploadTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image
                    source={
                        focused
                            ? UploadFocused
                            : Upload
                    }
                />
            )
        },
        tabBarOptions: {
            showLabel: false,
        },
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarIcon: {
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused
                                ? NotificationFocused
                                : Notification
                        }
                    />
                )
            }
        },
        tabBarOptions: {
            showLabel: false,
        },
    },
    Profile: {
        screen: ProfileTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image
                    source={
                        focused
                            ? ProfileFocused
                            : Profile
                    }
                />
            )
        },
        tabBarOptions: {
            showLabel: false,
        },
    },
});

const MainNavigator = createDrawerNavigator(
    {
        MainTabs,
    },
    {
        drawerPosition: 'right',
        drawerType: 'slide',
        contentComponent: Drawer
    }
);

const AppNavigator = createSwitchNavigator(
    {
        CheckLogin,
        LoginNavigator,
        MainNavigator,
    },
    {
        initialRouteName: 'CheckLogin',
    }
);

export default createAppContainer(AppNavigator);