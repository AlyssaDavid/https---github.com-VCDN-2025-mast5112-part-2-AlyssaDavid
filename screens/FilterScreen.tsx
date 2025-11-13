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

import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';

export default function FilterScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { menuItems } = context;
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredItems = selectedCourse
    ? menuItems.filter(item => item.course === selectedCourse)
    : [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>
      <View style={styles.buttonRow}>
        {['Starters', 'Mains', 'Desserts'].map(course => (
          <Button
            key={course}
            title={course}
            onPress={() => setSelectedCourse(course)}
            color={selectedCourse === course ? '#FF6F61' : '#888'}
          />
        ))}
      </View>

      {selectedCourse && (
        <Text style={styles.subheader}>
          Showing: {selectedCourse} ({filteredItems.length} items)
        </Text>
      )}

      {filteredItems.length === 0 ? (
        <Text style={styles.empty}>No items found for this course.</Text>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <MenuItemCard item={item} />}
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
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  subheader: {
    fontSize: 16,
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 8,
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
});
