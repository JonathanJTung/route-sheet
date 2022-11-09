import * as React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { RouteButton } from '../../shared/button';

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
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView>
                <View>
                    {routes.map((route) => {
                        return (
                            <RouteButton
                                name={route.name}
                                address={route.address}
                                onPress={() => navigation.navigate('Map')}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
