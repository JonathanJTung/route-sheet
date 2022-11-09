import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export function RouteButton({ name, address, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.addressText}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function RouteSheetButton({ name, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 10,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        width: 300,
        margin: 10
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    addressText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    }
})