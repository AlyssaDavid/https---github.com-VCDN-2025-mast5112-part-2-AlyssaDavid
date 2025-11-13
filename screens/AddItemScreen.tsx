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
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function AddItemScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { addMenuItem } = context;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = () => {
    if (!name || !description || !price || !course) {
      Alert.alert('Please fill in all fields');
      return;
    }

    addMenuItem({
      name, description, price, course,
      image: ''
    });
    setName('');
    setDescription('');
    setPrice('');
    setCourse('');
    Alert.alert('Item added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Menu Item</Text>

      <Text style={styles.label}>Course (Starters, Mains, Desserts)</Text>
      <TextInput
        style={styles.input}
        value={course}
        onChangeText={setCourse}
        placeholder="e.g. Starters"
        accessibilityLabel="Course input"
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Garlic Bread"
        accessibilityLabel="Name input"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="e.g. Crispy and golden"
        accessibilityLabel="Description input"
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="e.g. 45.00"
        keyboardType="numeric"
        accessibilityLabel="Price input"
      />

      <Button title="Add Item" onPress={handleSubmit} color="#FF6F61" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#FF6F61',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
});
