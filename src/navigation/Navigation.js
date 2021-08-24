import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Update from '../screens/Update';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
                <Stack.Screen 
                    name='Add'
                    component={Add}
                />
                <Stack.Screen 
                    name='Update'
                    component={Update}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;