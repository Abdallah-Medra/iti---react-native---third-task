import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './screens/Movie';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Favorites from './screens/Favorites';
import { Provider } from 'react-redux'
import { store } from './Redux/Store';





export default function App()
{
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>

            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Movie'
                    screenOptions={{
                    }}>
                    <Stack.Screen name='Home' component={Tab} options={{
                        headerBackVisible: false,
                        headerShown: false
                    }}></Stack.Screen>
                    <Stack.Screen name='Movie' component={Movie}></Stack.Screen>
                    <Stack.Screen name='Favorites' component={Favorites}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
    },
});
