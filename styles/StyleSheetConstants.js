import {StyleSheet} from "react-native";

export const mealsScreenStyles = StyleSheet.create({
    h1: {

    },
    h2: {
        fontSize: 35
    },
    h3: {
        fontSize: 20
    },
    safeArea: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    scrollView: {
        display: 'flex',
        width: '100%'
    },
    mealsListInnerPadding: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        paddingTop: 15
    },
    clientsText: {
        display: "flex",
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
        marginBottom: 15
    },
    mealsChipContainer: {
        display: "flex",
        backgroundColor: 'blue',
        width: 300,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10
    },
    hotMeals: {
        backgroundColor: '#EF492580'
    },
    coldMeals: {
        backgroundColor: '#00B8D180'
    },
    viewRouteButton: {
        // Flex Display, Position, Color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#00B8D180',
        // Padding
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: '80%',
        borderRadius: 50
    },
    viewRouteButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});