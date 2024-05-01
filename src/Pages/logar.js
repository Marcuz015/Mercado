// logar.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../Contexts/auth';

export default function Logar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [inputError, setInputError] = useState('');

  const navigation = useNavigation();

  const { logar } = useContext(AuthContext);

  function handleLogin() {
    // Verifica se o nome e o email estão preenchidos
    if (!nome.trim() || !email.trim()) {
      setInputError('Por favor, preencha todos os campos.');
      return;
    }

    // Se todos os campos estiverem preenchidos, realiza o login
    logar(email, nome, senha, cpf);
  }

  function cpfIsValid() {
    const cleanedCPF = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    if (cleanedCPF.length !== 11) {
      setInputError('CPF deve ter 11 dígitos');
      alert('CPF deve ter 11 dígitos');
      // Limpar o campo de CPF se o comprimento não for 11
      setCpf('');
      return;
    }
  
    setInputError('');
  }

  function handleCPFChange(text) {
    // Remove caracteres especiais e não numéricos do CPF
    const cleanedText = text.replace(/[^\d]/g, '');

    // Limita a entrada a 11 dígitos
    const limitedText = cleanedText.slice(0, 11);

    setCpf(limitedText);
  }

    return (
    <View style={styles.container}>
      <View style={styles.volta}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={require('../Images/Seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 160 }}>
        <Text style={styles.text}>Página de não possuo cadastro</Text>
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
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={cpf}
          keyboardType='numeric'
          onChangeText={handleCPFChange}
          placeholder="Digite seu cpf"
          onBlur={cpfIsValid}
          error={!!inputError}
          helperText={inputError}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  volta: {
    marginTop: 50,
    marginLeft: 10,
  },
  seta: {
    width: 30,
    height: 30,
  },
  text: {
    marginBottom: 14,
    fontSize: 20,
  },
});
