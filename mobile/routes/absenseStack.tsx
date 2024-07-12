import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../includes/header';
import Absense from '../pages/absense';

export default function AbsenseStack({ navigation }: any) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="AbsensePage">
            <Stack.Screen
                name="AbsensePage"
                component={Absense}
                options={{
                    header: ({ navigation }) => <Header title='Absense' navigation={navigation} />
                }} />
        </Stack.Navigator>
    );
};