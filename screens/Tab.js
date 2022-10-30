import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from './Favorites';
import Movie from './Movie';



const Tab = () =>
{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                TapBarActiveTintColor: "red",
                TapBarInactiveTintColor: "grey",
            }}
        >
            <Tab.Screen name='Movie' component={Movie}></Tab.Screen>
            <Tab.Screen name='Favorites' component={Favorites}></Tab.Screen>

        </Tab.Navigator>
    )
}

export default Tab

const styles = StyleSheet.create({})