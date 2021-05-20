import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'

const Home = ({navigation}) => {
    return (
        <>
            <Header title="Cabeçalho" />
            <View style={styles.container}>
                <Text style={styles.title}>Eu sou a home!</Text>
                <Button 
                  title = "Clique aqui"
                  onPress={() => {navigation.navigate('Pages2')}}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff4e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
    },
  });

export default Home
