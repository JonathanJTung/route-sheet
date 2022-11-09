import * as React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import MealsScreen from './screens/MealsScreen';
import RoutesScreen from './screens/RoutesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainContainer ({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                name="Meals List"
                component={MealsScreen}
                // options={{ title: "Meals List" }}
                navigationOptions={navigationOptions}
                />
                <Stack.Screen 
                name="Routes List"
                component={RoutesScreen}
                // options={{ title: "Today's Route" }}
                navigationOptions={navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const navigationOptions = {
    title: 'Chat',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'green' },
}