import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oswald_300Light } from '@expo-google-fonts/oswald';

export default function CarrinhoScreen() {
  const [fonteLoader] = useFonts({
    Oswald_300Light
  });

  const navigation = useNavigation();
  const { carrinho, removerDoCarrinho, user } = useContext(AuthContext);

  if (!fonteLoader) {
    return null;
  }

  const removerItem = (index) => {
    removerDoCarrinho(index);
  };

  const finalizarCompra = () => {
    if (user && user.nome) {

      navigation.navigate('LoginScreen');
      
    } 
  };

  return (
    <View style={styles.container}>
      <View style={styles.volta}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/Seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Produtos no Carrinho</Text>
      <View style={styles.produtoscarrinho}>
        <FlatList
          style={styles.FlatList}
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Image source={item.imagem} style={styles.imagem} />
              <View style={styles.infoContainer}>
                <Text>{item.nome}</Text>
                {item.preco !== undefined && (
                  <Text>R$ {item.preco.toFixed(2)}</Text>
                )}
              </View>
              <TouchableOpacity onPress={() => removerItem(index)}>
                <Text style={styles.botaoRemover}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={styles.titulo}>Total</Text>
        <Text style={styles.precototal}>Total: R${carrinho.reduce((total, produto) => total + (produto.preco || 0), 0).toFixed(2)}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={finalizarCompra}>
          <Text style={styles.finalizarcompra}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    backgroundColor: 'red',
    width: '100%',
    color: '#fff',
    fontFamily: 'Oswald_300Light',
    height: 39,
    paddingTop: 7,
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  botaoRemover: {
    color: 'red',
  },
  seta: {
    width: 30,
    height: 30,
    alignContent: 'center'
  },
  volta: {
    marginLeft: 10,
    marginTop: 30
  },
  produtoscarrinho:{
    padding: 10,
    backgroundColor: '#fff'
  },
  precototal:{
    fontSize: 20,
    textAlign: 'center',
    paddingBottom:20,
    paddingTop: 20
  },
  finalizarcompra:{
    backgroundColor:'red',
    width: 190,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    borderRadius: 120
  }
});
