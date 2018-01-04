import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";

import SearchScreen from '../SearchScreen';
import SearchTab from './SearchTab'
import Notifications from './Notifications';
import Messages from './Messages';

import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import SideBar from "../SideBar/SideBar.js";

import { ScrollView, Text } from 'react-native';
import TabBarComponent from './TabBarComponent';


const HomeScreenTab = TabNavigator({
  Home: {screen: HomeScreen},
  Search: { screen: SearchTab},
  Notifications: {screen: Notifications}, 
  Messages: {screen: Messages}
	},{
		tabBarComponent: props => (<TabBarComponent{...props} />), 
		tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
		activeTintColor: '#02a8ef',
		inactiveTintColor: 'grey',
		activeBackgroundColor: "#fff",
		inactiveBackgroundColor: "#fff",
		showIcon: true,
		showLabel: false,
		},
} );
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenTab },
    SearchScreen: {screen: SearchScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
