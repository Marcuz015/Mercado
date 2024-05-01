// LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../Contexts/auth';

export default function LoginScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const { signIn } = useContext(AuthContext);

  const navigation = useNavigation();

  function handleLogin() {
    // Verifica se o nome e o email estão preenchidos
    if (!nome.trim() || !email.trim()) {
      // Trate conforme necessário, como exibindo uma mensagem de erro
      return;
    }

    signIn(email, nome);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)!</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate("logar", { email, nome })}>
        <Text style={styles.naoPossuoCadastro}>Não possuo cadastro</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: 14,
    fontSize: 20,
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: 'red',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  naoPossuoCadastro: {
    paddingLeft: 150,
    paddingTop: 15,
  },
});