import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.nameText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'darkgrey',
        height: 150
    },
    nameText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'bottom',
        padding: 20,
        flex: 1
    }
})