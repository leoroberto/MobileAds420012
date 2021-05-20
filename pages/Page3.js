import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'

const Page3 = ({navigation}) => {
    return (
        <>
            <Header title="Cabeçalho" />
            <View style={styles.container}>
                <Text style={styles.title}>Página 3</Text>
                <View style={styles.button}>
                    <Button 
                        title="Voltar"
                        onPress={() => {navigation.goBack()}}
                    />
                </View>
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
    button: {
      padding: 10,
    },
  });

export default Page3;
