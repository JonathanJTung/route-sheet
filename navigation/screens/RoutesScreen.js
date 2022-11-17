import * as React from 'react';
import {View, Text, FlatList, ScrollView, Pressable, SafeAreaView, Animated, Image} from 'react-native';
import { RouteButton } from '../../shared/button';
import {mealsScreenStyles, routesScreenStyles} from "../../styles/StyleSheetConstants";


function RouteChip(props) {

    return (
        <View style={routesScreenStyles.routeChip}>
            <Text>
                Address
            </Text>
            <View style={routesScreenStyles.routeChipRouteName}>
                <View style={routesScreenStyles.statusSymbol}>
                    <Text style={{fontWeight: 'bold'}}>!</Text>
                </View>
                <Text style={[routesScreenStyles.h3]} >First Last</Text>
            </View>
            <Image style={routesScreenStyles.routeChipIcon} source={require('../../assets/arrow.svg')}/>
        </View>
    )
}

export default function RoutesScreen ({ navigation }) {

    const routes = [
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        },
        {
            name:'Ayush Roy',
            address: 'GDC 2317 Speedway, Austin, TX'
        }
    ];

    return (
        <SafeAreaView style={routesScreenStyles.safeArea}>
            <ScrollView style={[routesScreenStyles.scrollView, routesScreenStyles.routesScreenInnerPadding]}>

                {/* Header Section of Routes List */}
                <View>
                    <Text style={[routesScreenStyles.h3, routesScreenStyles.clientsText]}>
                        12
                        <Text>
                            {` Clients Today`}
                        </Text>
                    </Text>
                    <View style={routesScreenStyles.mealsButtonFilterSection}>
                        <Pressable style={routesScreenStyles.mealTypeButton}>
                            <Text>
                                HOT MEALS
                            </Text>
                        </Pressable>
                        <Pressable style={routesScreenStyles.mealTypeButton}>
                            <Text>
                                COLD BAGS
                            </Text>
                        </Pressable>
                        <Pressable style={routesScreenStyles.mealTypeButton}>
                            <Text>
                                1
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={routesScreenStyles.h3}>
                    Route Overview
                </Text>

                {
                    routes.map(x => <RouteChip/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}
