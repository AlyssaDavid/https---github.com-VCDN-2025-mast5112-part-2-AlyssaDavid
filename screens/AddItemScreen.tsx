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
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ConfettiCannon from 'react-native-confetti-cannon';
import { MenuContext } from '../context/MenuContext';

export default function AddItemScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { addMenuItem } = context;

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starters');
  const [image, setImage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAdd = () => {
    if (name && desc && price && image) {
      addMenuItem({ name, description: desc, price, course, image });
      setName('');
      setDesc('');
      setPrice('');
      setImage('');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Add a New Dish ✨</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.picker}
        dropdownIconColor="#FF6F61"
      >
        <Picker.Item label="Starters 🧄" value="Starters" />
        <Picker.Item label="Mains 🥩" value="Mains" />
        <Picker.Item label="Desserts 🍰" value="Desserts" />
      </Picker>
      <Button title="Add Dish to Scroll" onPress={handleAdd} color="#FF6F61" />

      {showConfetti && (
        <ConfettiCannon count={100} origin={{ x: -10, y: 0 }} fadeOut={true} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
  picker: {
    color: '#FFF',
    backgroundColor: '#1A1A1A',
    marginBottom: 12,
    borderRadius: 8,
  },
});
