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
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';

export default function MenuManagementScreen() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContext not found");

  const { menuItems, addMenuItem, removeMenuItem } = context;

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starters');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (name && desc && price && image) {
      addMenuItem({ name, description: desc, price, course, image });
      setName('');
      setDesc('');
      setPrice('');
      setImage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} style={styles.input} placeholderTextColor="#999" />
      <TextInput placeholder="Description" value={desc} onChangeText={setDesc} style={styles.input} placeholderTextColor="#999" />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} placeholderTextColor="#999" />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} style={styles.input} placeholderTextColor="#999" />
      <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <Button title="Save Item" onPress={handleAdd} color="#FF6F61" />

      <FlatList
        data={menuItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <MenuItemCard item={item} />
            <Button title="Remove" onPress={() => removeMenuItem(index)} color="#D32F2F" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  input: { borderWidth: 1, borderColor: '#444', color: '#FFF', marginBottom: 12, padding: 8 },
  picker: { color: '#FFF', backgroundColor: '#222', marginBottom: 12 },
  card: { marginBottom: 16 },
});
