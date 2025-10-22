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
import { View, Text, Image, StyleSheet } from 'react-native';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  course: string;
  image: string;
}

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R {item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  course: {
    fontSize: 14,
    color: '#AAA',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#DDD',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});
