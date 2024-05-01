import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';
import { AuthContext } from '../../../Contexts/auth'; 

export default function feijao() {
  const navigation = useNavigation();
  const { adicionarProduto } = useContext(AuthContext);


  const [fonteLoader] = useFonts({
    Oswald_300Light,
  });

  if (!fonteLoader) {
    return null;
  }

  const handleCompra = () => {

    adicionarProduto(
      require('../../../Images/feijao.png'),
      'Feijão Camil',
      7.99
    );

    navigation.navigate('carrinho');
  };

  return (
    <View style={styles.container}>
      <View style={styles.volta}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../../../Images/Seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Feijão</Text>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../Images/feijao.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.descricao}>Feijão Camil</Text>
        <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 20 }}>R$7,99</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
      <TouchableOpacity style={styles.btnCompra} onPress={handleCompra}>
        <Text style={styles.txtComprar}>Comprar</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seta: {
    width: 30,
    height: 30,
  },
  volta: {
    marginTop: 35,
    marginLeft: 10,
  },
  img: {
    width: 400,
    height: 400,
  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    backgroundColor: '#3498db',
    width: '100%',
    color: '#fff',
    fontFamily: 'Oswald_300Light',
    height: 39,
    paddingTop: 7,
    fontWeight: 'bold'
  },
  descricao: {
    fontSize: 20,
    textAlign: 'center',
  },
  txtComprar: {
    fontSize: 25,
    color: '#fff',
  },
  btnCompra: {
    backgroundColor: '#3498db',
    width: '80%',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20, // Adicionado para ajustar o espaçamento no topo
  },
});
