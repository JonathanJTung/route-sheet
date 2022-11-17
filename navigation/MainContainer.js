import * as React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import MealsScreen from './screens/MealsScreen';
import RoutesScreen from './screens/RoutesScreen';

// Not using NavigationContainer because it has less flexibility
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CustomHeader from "../widgets/CustomHeader";

// There are tons of options for screens, but just using the basic options for now
const screens = {
    MealsList: {
        screen: MealsScreen,
        navigationOptions: {
            header: () => {
                return (
                    // Will refactor this later, but for now this is the custom header made
                    <CustomHeader title='Meal List'/>
                )
            },
            headerStyle: {
                height: 80
            }
        }
    },
    RoutesList: {
        screen: RoutesScreen,
        navigationOptions: {
            header: () => {
                return (
                    <CustomHeader title="Today's Route"/>
                )
            },
            headerStyle: {
                height: 80
            }
        }

    }
}

const navigationConfig = {
    initialRouteName: 'MealsList'
}

const AppNavigator = createStackNavigator(screens, navigationConfig);
export default createAppContainer(AppNavigator);