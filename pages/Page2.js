import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'
import { TextInput } from 'react-native-gesture-handler';
import {consultarEndereco} from '../services/apiCep';

const Page2 = ({navigation}) => {

  const [cep, setCep] = React.useState('');

  const buscar = async () => {
    const endereco = await consultarEndereco(cep);
    navigation.navigate('Pages3', endereco);
  };

    return (
        <>
            <Header title="Cabeçalho" />
            <View style={styles.container}>
                <Text style={styles.title}>Página 2</Text>
                <View style={styles.button}>
                  <Button
                      title="Voltar"
                      onPress={() => {navigation.goBack()}}
                  />
                </View>
                <View style={styles.button}>
                  <TextInput onChangeText={(texto) => setCep(texto)}/>
                  <Button
                      title="Clique aqui para consultar o CEP"
                      onPress={() => {buscar()}}
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

export default Page2;
