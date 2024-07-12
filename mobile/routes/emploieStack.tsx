import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../includes/header';
import Emploie from '../pages/emploie';

export default function EmploieStack({ navigation }: any) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="EmploiePage">
            <Stack.Screen
                name="EmploiePage"
                component={Emploie}
                options={{
                    header: ({ navigation }) => <Header title="Prendre l'absence" navigation={navigation} />
                }} />
        </Stack.Navigator>
    );
};