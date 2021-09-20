/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import NotFoundScreen from '../screens/NotFoundScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import TabVaxScreen from '../screens/TabVaxScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/LoginScreen';
import VaxDetailsScreen from '../screens/VaxDetailsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  DefaultTheme.colors.card = Colors.light.card;
  DefaultTheme.colors.border = Colors.light.border;
  DefaultTheme.colors.background = Colors.light.card;
  DefaultTheme.colors.text = Colors.light.text;

  DarkTheme.colors.card = Colors.dark.card;
  DarkTheme.colors.border = Colors.dark.border;
  DarkTheme.colors.background = Colors.dark.card;
  DarkTheme.colors.text = Colors.dark.text;

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions = {{animation: 'slide_from_right'}}>
      <Stack.Screen name="LoginScreen" component = {LoginScreen} options={{headerShown: false }}  />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="VaxDetails" component={VaxDetailsScreen} options={{ title: 'Detalhe da vacinação', headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveBackgroundColor: Colors[colorScheme].background,
        tabBarInactiveBackgroundColor: Colors[colorScheme].background,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }} >
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabVax"
        component={TabVaxScreen}
        options={{
          title: 'Vacinas',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <Image source={require('../assets/images/vax-icon.png')}  style={[styles.icon, {tintColor: color}]}/>,
        }}
      />
      <BottomTab.Screen
        name="TabProfile"
        component={TabProfileScreen}
        options={{
          title: 'Perfil',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
 });