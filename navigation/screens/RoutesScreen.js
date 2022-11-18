import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    Pressable,
    SafeAreaView,
    Animated,
    Image,
    TouchableWithoutFeedback, Dimensions
} from 'react-native';
import {mealsScreenStyles, routesScreenStyles} from "../../styles/StyleSheetConstants";
import {useEffect, useState} from "react";


function RouteChip(props) {

    const scaleAnim = new Animated.Value(0);

    const chipScale = scaleAnim.interpolate({
        inputRange: [0, 0.5, 1.0],
        outputRange: [1.0, 0.975, 0.95]
    });

    const pressChipFunction = () => {
        Animated.timing(scaleAnim, {
            toValue: 1.0,
            duration: 100,
            useNativeDriver: true
        }).start();
    }

    const releaseChipFunction = () => {
        Animated.timing(scaleAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={pressChipFunction}
            onPressOut={releaseChipFunction}
        >
            <Animated.View style={{...routesScreenStyles.routeChip, transform:  [{scale: chipScale}] }}>
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
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

function MealsButton(props) {

    const scaleAnim = new Animated.Value(0);

    const buttonScale = scaleAnim.interpolate({
        inputRange: [0.0, 0.5, 1.0],
        outputRange: [1.0, 0.975, 0.95]
    });

    const pressButtonFunction = () => {
        Animated.timing(scaleAnim, {
            toValue: 1.0,
            duration: 50,
            useNativeDriver: true
        }).start();
    }

    const releaseButtonFunction = () => {
        Animated.timing(scaleAnim, {
            toValue: 0.0,
            duration: 50,
            useNativeDriver: true
        }).start();
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={pressButtonFunction}
            onPressOut={releaseButtonFunction}
            onPress={props.onPress}
        >
            <Animated.View style={{...routesScreenStyles.mealTypeButton, transform: [{scale: buttonScale}]}}>
                <Text>
                    {props.title}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

function MealsSummaryBottomDrawer(props) {

    const heightOffset = Dimensions.get('window').height * 0.5;

    const transformAnimationValue = new Animated.Value(0.0);
    const transformAnimation = transformAnimationValue.interpolate({
        inputRange: [0.0, 0.5, 1.0],
        outputRange: [heightOffset, heightOffset / 2, 0]
    })

    useEffect(() => {
        transformAnimationValue.setValue(0.0);
        if (props.open) {
            Animated.timing(transformAnimationValue, {
                toValue: 1.0,
                duration: 200,
                useNativeDriver: true
            }).start();
        } else {
            transformAnimationValue.setValue(1.0);
            Animated.timing(transformAnimationValue, {
                toValue: 0.0,
                duration: 200,
                useNativeDriver: true
            }).start();
        }
    }, [props.open]);

    return (
        <TouchableWithoutFeedback>
            <Animated.View style={{...routesScreenStyles.mealsSummaryBottomDrawer, transform: [{translateY: transformAnimation}]}}>
                <Text>
                    For now, the open and close drawer navigation will be controlled by HOT MEALS and COLD BAGS button
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
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

    const [isModalOpen, setModalOpen] = useState(false);
    let data = null;

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
                        <MealsButton title='HOT MEALS' onPress={() => {
                            setModalOpen(true);
                        }}/>
                        <MealsButton title='COLD BAGS' onPress={() => setModalOpen(false)}/>
                        <MealsButton title='1' onPress={() => setModalOpen(true)}/>
                    </View>
                </View>

                <Text style={routesScreenStyles.h3}>
                    Route Overview
                </Text>

                {
                    routes.map(x => <RouteChip/>)
                }
            </ScrollView>

            <MealsSummaryBottomDrawer open={isModalOpen} onClose={() => setModalOpen(false)}/>
        </SafeAreaView>
    );
}
