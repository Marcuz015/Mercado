import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from '../Contexts/auth';

const CustomDrawerContent = (props) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogin = () => {
    props.navigation.navigate('LoginScreen');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoContainer}>
        <View style={{borderWidth: 1, borderRadius: 30}}>
        <Image
          source={{ uri: 'https://gifs.eco.br/wp-content/uploads/2023/10/imagens-de-pessoa-feliz-png-0-1024x729.png' }}
          style={styles.userImage}
        />
        </View>
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>{user ? user.nome : 'Convidado'}</Text>
          <Text style={styles.userEmail}>{user ? user.email : 'Faça login para visualizar o e-mail'}</Text>
        </View>
        {user ? (
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
      <DrawerItem
        label="Home"
        icon={() => <Icon name="home" size={20} color="#000" />}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      <DrawerItem
        label="Perfil"
        icon={() => <Icon name="user" size={20} color="#000" />}
        onPress={() => props.navigation.navigate('PerfilScreen')}
      />
      <DrawerItem
        label="Carrinho"
        icon={() => <Icon name="shopping-cart" size={20} color="#000" />}
        onPress={() => props.navigation.navigate('carrinho')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfoText: {
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  userImage:{
    width: 100,
    height: 100,
  }
});

export default CustomDrawerContent;
