/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
// React Navigation used for screen routing and tab structure
// Author: React Navigation contributors
// Date Accessed: 22 October 2025
// Source: https://reactnavigation.org

// Ionicons used for tab icons
// Author: Expo contributors
// Date Accessed: 22 October 2025
// Source: https://docs.expo.dev/guides/icons/

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
            const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
              Home: 'home-outline',
              Add: 'add-circle-outline',
              Filter: 'funnel-outline',
              Manage: 'settings-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
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
