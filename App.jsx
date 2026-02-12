import { StyleSheet, Easing, Pressable } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo'
import Splash from './src/splash/Splash'
import LoggIn from './src/screencomponents/loggedin/LoggIn';
import BottomTabNavigator from './src/NavigatorBottomNav/BottomTabNavigator';
import AccountOverview from './src/screencomponents/accountoverview/AccountOverview';
import AccountActivity from './src/screencomponents/accountcctivitys/AccountActivity';
import Profile from './src/NavigatorBottomNav/drawerbar/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigate from './src/NavigatorBottomNav/DrawerNavigate';




const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

const App = (props) => {
  const { navigation } = props;

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "#ff0000" },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: { fontSize: 15 },
        }}
      >
        <Stack.Screen name='splash' options={{ headerShown: false }}>
          {(props) => <Splash {...props} />}
        </Stack.Screen>
        <Stack.Screen name='logged in' options={{ headerShown: false }}>
          {(props) => <LoggIn {...props} />}
        </Stack.Screen>

        <Stack.Screen name="homes" options={{ headerShown: false }}>
          {(props) => <DrawerNavigate {...props} />}
        </Stack.Screen>

        <Stack.Screen name="account overview"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Account Overview',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#ff0000'
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerRight: () => (
              <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" />
              </Pressable>
            ),
          })}>
          {(props) => <AccountOverview {...props} />}
        </Stack.Screen>

        <Stack.Screen name="account activity"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Account Activity',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#ff0000'
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerRight: () => (
              <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" />
              </Pressable>
            ),
          })}>
          {(props) => <AccountActivity {...props} />}
        </Stack.Screen>

        <Stack.Screen name="profile"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Account Activity',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#ff0000'
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerRight: () => (
              <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" />
              </Pressable>
            ),
          })}>
          {(props) => <Profile {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1
  },
  cartIcons: {
    right: 15
  }
})