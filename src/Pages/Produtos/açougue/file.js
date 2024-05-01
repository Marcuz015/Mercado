import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';
import { AuthContext } from '../../../Contexts/auth'; 

export default function File() {
  const navigation = useNavigation();
  const { adicionarProduto } = useContext(AuthContext);
  const [preco, setPreco] = useState(0);

  const [fonteLoader] = useFonts({
    Oswald_300Light,
  });

  if (!fonteLoader) {
    return null;
  }

  const handleIncremento = () => {
    setPreco(preco + 1.50);
  };

  const handleDecremento = () => {
    if (preco > 0) {
      setPreco(preco - 1);
    }
  };

  const handleCompra = () => {
    adicionarProduto(
      require('../../../Images/file.png'),
      'Capa de Filé friboi',
      preco
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
      <Text style={styles.titulo}>Filé</Text>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../Images/file.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.descricao}>Capa de Filé friboi</Text>
        <Text style={styles.descricao}>Escolha pór kg</Text>      
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleIncremento}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 40, textAlign: 'center', marginHorizontal: 10 }}>R${preco.toFixed(2)}</Text>
          <TouchableOpacity onPress={handleDecremento}>
            <Text style={styles.botao}>-</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 20,
  },
  botao: {
    fontSize: 40,
    backgroundColor: '#3498db',
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 37,
    color: 'white',
  },
});
