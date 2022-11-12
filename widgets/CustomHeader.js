import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";

/*
    The MOV Header has unique properties that could be reused:
        - Extended height of screen
        - Title for the screen name
        - SVG image icon


 */
const styles = StyleSheet.create(
    {
        header: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: '100%',
            height: 200,
            backgroundColor: '#E6E7E8'
        },
        text: {
            position: "absolute",
            fontSize: 30,
            fontWeight: '500',
            bottom: 15,
            left: 20
        }
    }
);

export default function CustomHeader(props) {

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}