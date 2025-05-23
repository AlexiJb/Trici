import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './footer'; // ajusta la ruta si es necesario
import Principal from './Principal';
import CrearCarrera from './CrearCarrera';

const Home = () => {
  return (
    <View style={styles.container}>
        <CrearCarrera/>
      <View style={styles.content}>
      </View>
      <Footer navigation={{ navigate: () => {} }} /> {/* Sustituye esto por el navigation real si usas react-navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
