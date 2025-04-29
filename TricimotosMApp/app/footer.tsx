import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principal')}>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.label}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CrearCarrera')}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.label}>Carrera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recordatorios')}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
        <Text style={styles.label}>Recordar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  button: {
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
});

export default Footer;
