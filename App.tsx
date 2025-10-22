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
import Navigation from './navigation/navigation';
import { MenuProvider } from './context/MenuContext';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <MenuProvider>
      <Navigation />
    </MenuProvider>
  );
}


