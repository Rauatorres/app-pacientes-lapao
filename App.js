import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/tela_de_login/Login';
import MainView from './src/MainView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
    {/* <View style={styles}>
      <StatusBar/> */}
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='main' component={MainView}/>
        </Stack.Navigator>
    {/* </View> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: "rgb(233, 233, 233)",
});