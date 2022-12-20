import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Settings from '../screens/settings';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const BottomStack = createMaterialBottomTabNavigator();

const Routes = () => {
    return(

        <NavigationContainer>
            <BottomStack.Navigator>
                <BottomStack.Screen name='Home' component={Home}/>
                <BottomStack.Screen name='Settings' component={Settings} />
                
            </BottomStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

