/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
// React Native components used for layout and styling
// Author: Meta Platforms, Inc.
// Date Accessed: 22 October 2025
// Source: https://reactnative.dev

// React hooks used for state and context
// Author: Meta Platforms, Inc.
// Date Accessed: 22 October 2025
// Source: https://reactjs.org



// Menu context pattern adapted for state management
// Author: Alyssa David (2025), adapted from React Context API
// Source: Internal coursework reference

import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';

export default function HomeScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { menuItems } = context;

  const totalItems = menuItems.length;

  const averagePriceByCourse = (course: string): string => {
    const filtered = menuItems.filter(item => item.course === course);
    const total = filtered.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return filtered.length ? (total / filtered.length).toFixed(2) : '0.00';
  };

  const renderHeader = () => (
    <View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' }}
        style={styles.hero}
      />
      <Text style={styles.header}>Welcome to The Chef’s Scroll</Text>
      <Text style={styles.stats}>Total Items: {totalItems}</Text>
      <Text style={styles.stats}>Starters Avg: R {averagePriceByCourse("Starters")}</Text>
      <Text style={styles.stats}>Mains Avg: R {averagePriceByCourse("Mains")}</Text>
      <Text style={styles.stats}>Desserts Avg: R {averagePriceByCourse("Desserts")}</Text>
      <Text style={styles.subheader}>Full Menu</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  hero: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 12,
    textAlign: 'center',
  },
  stats: {
    fontSize: 14,
    color: '#CCC',
    marginBottom: 4,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF6F61',
    marginBottom: 12,
    marginTop: 20,
    textAlign: 'center',
  },
});
