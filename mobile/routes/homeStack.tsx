import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Header from '../includes/header';

export default function HomeStack({ navigation }: any) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                name="HomePage"
                component={Home}
                options={{
                    header: ({ navigation }) => <Header title="ENSAS" navigation={navigation} />
                }} />
        </Stack.Navigator>
    );
};