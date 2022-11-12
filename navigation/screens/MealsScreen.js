import * as React from 'react';
import {View, Text, FlatList, StyleSheet, Button, SafeAreaView, ScrollView, Pressable} from 'react-native';
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

// Created a styles folder that can hold styles of every page, will simplify reading code
import {mealsScreenStyles} from "../../styles/StyleSheetConstants";


function BulletPointText(props) {
    return (
        <Text>{`\u2022 ${props.text}`}</Text>
    )
}


export default function MealsScreen ({ navigation }) {

    const coldMeals = [
        {
            id: 1,
            type:'WHITE',
            quantity: 1
        },
        {
            id: 2,
            type:'BLACK SKIM',
            quantity: 1
        },
        {
            id: 3,
            type:'BLUE',
            quantity: 2
        },
        {
            id: 4,
            type:'GRAY',
            quantity: 1
        },
        {
            id: 5,
            type:'GREEN',
            quantity: 3
        },
        {
            id: 6,
            type:'ORANGE',
            quantity: 1
        }
    ];

    const hotMeals = [
        {
            id: 1,
            type:'WHITE',
            quantity: 1
        },
        {
            id: 2,
            type:'BLACK SKIM',
            quantity: 1
        },
        {
            id: 3,
            type:'BLUE',
            quantity: 2
        },
        {
            id: 4,
            type:'GRAY',
            quantity: 1
        },
        {
            id: 5,
            type:'GREEN',
            quantity: 3
        },
        {
            id: 6,
            type:'ORANGE',
            quantity: 1
        }
    ];

    return (
        // Overall Screen
        <SafeAreaView style={mealsScreenStyles.safeArea}>
            <ScrollView style={mealsScreenStyles.scrollView} contentContainerStyle={{display: 'flex', alignItems: 'center'}}>
                <View style={mealsScreenStyles.mealsListInnerPadding}>
                    <Text style={[mealsScreenStyles.h3, mealsScreenStyles.clientsText]}>
                        12
                        <Text>
                            {` Clients Today`}
                        </Text>
                    </Text>
                    {/* HOT MEALS */}
                    <View style={[mealsScreenStyles.mealsChipContainer, mealsScreenStyles.hotMeals]}>
                        <Text>12 HOT MEALS</Text>
                        <FlatList
                            data={hotMeals}
                            renderItem={
                            ({item}) => {
                                return <BulletPointText text={`${item.quantity} ${item.type.toLowerCase()}`}/>
                            }
                        }/>
                    </View>

                    {/* COLD MEALS */}
                    <View style={[mealsScreenStyles.mealsChipContainer, mealsScreenStyles.coldMeals]}>
                        <Text>13 COLD BAGS</Text>
                        <FlatList data={coldMeals} renderItem={
                            ({item}) => {
                                return <BulletPointText text={item.id}/>
                            }
                        }/>
                    </View>
                </View>
            </ScrollView>

            <Pressable
                onPress={() => navigation.navigate('RoutesList')}
                style={mealsScreenStyles.viewRouteButton}
            >
                <Text style={[mealsScreenStyles.h2, mealsScreenStyles.viewRouteButtonText]}>View Route</Text>
            </Pressable>
        </SafeAreaView>
    );
}