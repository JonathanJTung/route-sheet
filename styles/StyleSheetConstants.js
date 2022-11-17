import {StyleSheet} from "react-native";

const defaultStyles = StyleSheet.create({
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
    }
})

export const mealsScreenStyles = StyleSheet.create({
    ...defaultStyles,
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

export const routesScreenStyles = StyleSheet.create({
    ...defaultStyles,
    routesScreenInnerPadding: {
        paddingTop: 15,
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    clientsText: {
        display: "flex",
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
        marginBottom: 15,
    },
    mealsButtonFilterSection: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    mealTypeButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        paddingTop: 2.5,
        paddingBottom: 2.5
    },
    routeChip: {
        backgroundColor: '#E6E7E8',
        marginTop: 5,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 5,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 8
    },
    routeChipAddress: {

    },
    routeChipRouteName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    routeChipIcon: {
        position: "absolute",
        left: 0,
        height: 25,
        width: 25
    },
    statusSymbol: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#EF4925',
        marginRight: 5
    }
})