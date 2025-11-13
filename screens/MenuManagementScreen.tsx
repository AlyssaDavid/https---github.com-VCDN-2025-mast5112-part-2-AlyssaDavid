/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
// React Native components used for layout and interactivity
// Author: Meta Platforms, Inc.
// Date Accessed: 13 November 2025
// Source: https://reactnative.dev

// React hooks and context API used for state management
// Author: Meta Platforms, Inc.
// Date Accessed: 13 November 2025
// Source: https://reactjs.org

import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { MenuContext } from '../context/MenuContext';

// Local type declaration
type MenuItem = {
  name: string;
  description: string;
  price: string;
  course: string;
};

export default function MenuManagementScreen() {
  const context = useContext(MenuContext);
  if (!context) return <Text style={styles.error}>MenuContext not available</Text>;

  const { menuItems, removeMenuItem } = context;

  const handleRemove = (itemName: string) => {
    Alert.alert(
      'Confirm Removal',
      `Are you sure you want to remove "${itemName}" from the menu?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => removeMenuItem(itemName) },
      ]
    );
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.course} • R {item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Remove" onPress={() => handleRemove(item.name)} color="#FF6F61" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Your Menu</Text>
      {menuItems.length === 0 ? (
        <Text style={styles.empty}>No items to manage. Add some first!</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#000' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  details: {
    fontSize: 14,
    color: '#CCC',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#AAA',
    marginBottom: 8,
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 40,
  },
});
