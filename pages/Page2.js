import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'

const Page2 = ({navigation}) => {
    return (
        <>
            <Header title="Cabeçalho" />
            <View style={styles.container}>
                <Text style={styles.title}>Página 2</Text>
                <Button 
                    title="Voltar"
                    onPress={() => {navigation.goBack()}}
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

export default Page2;
