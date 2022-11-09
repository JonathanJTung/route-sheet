import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

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
        <View style={styles.container}>
            <View style={styles.mealsContainer}>
                <View style={styles.mealList}>
                    <Text style={{color: 'blue', fontSize: 25}}>Cold Meals</Text>
                    <FlatList
                        data={coldMeals}
                        renderItem={({item}) => <Text style={styles.item}>{item.quantity}{" "}{item.type}</Text>}
                    />
                </View>
                <View style={styles.mealList}>
                    <Text style={{color: 'red', fontSize: 25}}>Hot Meals</Text>
                    <FlatList
                        data={hotMeals}
                        renderItem={({item}) => <Text style={styles.item}>{item.quantity}{" "}{item.type}</Text>}
                    />
                </View>
            </View>
            <Button
                onPress={() => navigation.navigate('Routes List')}
                style={styles.button}
                title="Meals acquired, see routes"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    mealsContainer: {
        flexDirection: 'row',
        paddingTop: 22,
        position: 'absolute',
        top: 0
    },
    mealList: {
        flex: 1
    },
    button: {
        position: 'absolute',
        bottom:0
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
  });