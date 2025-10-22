/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';

export default function FilterScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { menuItems } = context;
  const [selectedCourse, setSelectedCourse] = useState('Starters');

  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <FlatList
        data={filteredItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 12 },
  picker: { color: '#FFF', backgroundColor: '#222', marginBottom: 12 },
});
