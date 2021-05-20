import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

const Page2 = ({navigation}) => {

  const [cep, setCep] = React.useState('');

  const buscar = () => {
    //Pegar o cep e juntar a url do viacep - https://viacep.com.br/ws/54440390/json/
    const url = `https://viacep.com.br/ws/${cep}/json/`
    //Chamar o viacep através do Axios
    axios.get(url).then((res) => {
      //Tratar os dados que vieram do viacep
      const endereco = {
        rua: res.data.logradouro,
        complemento: res.data.complemento,
        bairro: res.data.bairro,
        cidade: res.data.localidade,
        estado: res.data.uf
      };
      //Mandar para a próxima página
    });
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
