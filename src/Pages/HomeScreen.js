import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [fonteLoader] = useFonts({
    Oswald_300Light
  });
  if (!fonteLoader) {
    return null;
  }

  const navigation = useNavigation();

  // Arrays contendo os itens do mercado
  const mercadoItens1 = [
    { nome: 'Guaraná', preco: 'R$6,00', imagem: require('../Images/guarana.png'), rota: 'guarana' },
    { nome: 'Coca-Cola', preco: 'R$7.99', imagem: require('../Images/cocacola.png'), rota: 'coca' },
    { nome: 'Pepsi', preco: 'R$6,50', imagem: require('../Images/pepsi.png'), rota: 'pepsi' },
  ];

  const mercadoItens2 = [
    { nome: 'Arroz', preco: 'R$7,50', imagem: require('../Images/Arroz.png'), rota: 'Arroz' },
    { nome: 'Feijão', preco: 'R$7.99', imagem: require('../Images/feijao.png'), rota: 'feijao' },
    { nome: 'Macarrão', preco: 'R$6,50', imagem: require('../Images/Macarrao.png'), rota: 'macarrao' },
  ];

  const mercadoItens3 = [
    { nome: 'File', preco: 'R$6,00', imagem: require('../Images/file.png'), rota: 'file' },
    { nome: 'Picanha', preco: 'R$7.99', imagem: require('../Images/picanha.png'), rota: 'picanha' },
    { nome: 'Linguiça', preco: 'R$6,50', imagem: require('../Images/linguiça.png'), rota: 'linguica' },
  ];

  const mercadoItens4 = [
    { nome: 'Presunto', preco: 'R$6,00', imagem: require('../Images/presunto.png'), rota: 'presunto' },
    { nome: 'Queijo', preco: 'R$7.99', imagem: require('../Images/Queijo.png'), rota: 'queijo' },
    { nome: 'Mortadela', preco: 'R$6,50', imagem: require('../Images/Mortadela.png'), rota: 'mortadela' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Bem vindo ao nosso mercado</Text>
        <Text style={{ textAlign: 'center', fontFamily: "Oswald_300Light", fontSize: 20, marginBottom: 50 }}>Mercado Raízes da Terra</Text>
        <View style={styles.promocao}>
          <Text style={{ fontSize: 17 }}>Fique atento na promoção do dia!!</Text>
          <Image source={require('../Images/promocao.png')} style={styles.img} />
        </View>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text style={styles.produtos}>
          Refrigerantes em destaque
        </Text>
        <FlatList
          data={(mercadoItens1)}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.rota)}>
              <View style={styles.ProdutosContainer}>
                <Image source={item.imagem} style={styles.comidas} />
                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.nome + index}
        />
        <Text style={styles.produtos}>
          Comidas não perecíveis
        </Text>
        <FlatList
          data={(mercadoItens2)}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.rota)}>
              <View style={styles.ProdutosContainer}>
                <Image source={item.imagem} style={styles.comidas} />
                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.nome + index}
        />
        <Text style={styles.produtos}>
          Açougue
        </Text>
        <FlatList
          data={(mercadoItens3)}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.rota)}>
              <View style={styles.ProdutosContainer}>
                <Image source={item.imagem} style={styles.comidas} />
                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.nome + index}
        />
        <Text style={styles.produtos}>
          Frios
        </Text>
        <FlatList
          data={(mercadoItens4)}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.rota)}>
              <View style={styles.ProdutosContainer}>
                <Image source={item.imagem} style={styles.comidas} />
                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.nome + index}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  img: {
    width: 200,
    height: 360,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  promocao: {
    borderWidth: 1,
    width: 310,
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  ProdutosContainer: {
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
  },
  comidas: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  preco: {
    fontSize: 16,
    backgroundColor: 'red',
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    marginBottom: 10,
    color: '#fff',
    paddingVertical: 5,
  },
  produtos: {
    textAlign: 'center',
    fontFamily: "Oswald_300Light",
    fontSize: 24,
    backgroundColor: 'red',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
    width: '100%'
  }
});
