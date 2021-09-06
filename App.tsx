import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionListPage from './src/pages/TransactionListPage';
import TransactionDetailPage from './src/pages/TransactionDetailPage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="transaction/list" component={TransactionListPage} />
                <Stack.Screen name="transaction/detail" component={TransactionDetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}