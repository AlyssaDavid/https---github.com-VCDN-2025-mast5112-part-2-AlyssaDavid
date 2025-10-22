/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import FilterScreen from '../screens/FilterScreen';
import MenuManagementScreen from '../screens/MenuManagementScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#0D0D0D' },
          tabBarActiveTintColor: '#FF6F61',
          tabBarInactiveTintColor: '#888',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          headerStyle: { backgroundColor: '#0D0D0D' },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FF6F61',
          },
          headerTintColor: '#FF6F61',
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

            if (route.name === 'Add') iconName = 'add-circle-outline';
            else if (route.name === 'Filter') iconName = 'funnel-outline';
            else if (route.name === 'Manage') iconName = 'settings-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddItemScreen} />
        <Tab.Screen name="Filter" component={FilterScreen} />
        <Tab.Screen name="Manage" component={MenuManagementScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
