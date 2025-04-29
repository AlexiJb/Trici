import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CrearCarrera = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear una carrera</Text>

      {/* Fecha y hora */}
      <View style={styles.inputContainer}>
        <Ionicons name="calendar-outline" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Fecha y hora" style={styles.input} placeholderTextColor="#888" />
      </View>

      {/* Cliente */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Cliente" style={styles.input} placeholderTextColor="#888" />
      </View>

      {/* Origen */}
      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Origen" style={styles.input} placeholderTextColor="#888" />
      </View>

      {/* Destino */}
      <View style={styles.inputContainer}>
        <Ionicons name="flag-outline" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Destino" style={styles.input} placeholderTextColor="#888" />
      </View>

      {/* Estado */}
      <View style={styles.estadoContainer}>
        <Text style={styles.estadoText}>Estado:</Text>
        <Text style={styles.estadoConfirmado}></Text>
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🧭 Iniciar carrera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 200,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  estadoContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 200,
  },
  estadoText: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  estadoConfirmado: {
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CrearCarrera;
