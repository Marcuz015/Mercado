// Routes.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Pages/HomeScreen';
import PerfilScreen from '../Pages/PerfilScreen';
import LoginScreen from '../Pages/LoginScreen';
import carrinho from '../Pages/carrinho'
import pepsi from '../Pages/Produtos/refri/pepsi'
import Guarana from '../Pages/Produtos/refri/guarana';
import coca from '../Pages/Produtos/refri/coca';
import logar from '../Pages/logar';
import Arroz from '../Pages/Produtos/comida/Arroz';
import feijao from '../Pages/Produtos/comida/feijao';
import macarrao from '../Pages/Produtos/comida/macarrao';
import file from '../Pages/Produtos/açougue/file';
import linguica from '../Pages/Produtos/açougue/linguica';
import picanha from '../Pages/Produtos/açougue/picanha';
import mortadela from '../Pages/Produtos/Frios/mortadela';
import presunto from '../Pages/Produtos/Frios/presunto';
import queijo from '../Pages/Produtos/Frios/queijo';



const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
  
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
              width: 250,
            },
            headerTitle: 'ㅤ',
          }}
        >
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="PerfilScreen" component={PerfilScreen} />
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="logar" component={logar} options={{ headerShown: false }}/>
          <Drawer.Screen name="carrinho" component={carrinho} options={{ headerShown: false }}/>
          <Drawer.Screen name="guarana" component={Guarana}  options={{ headerShown: false }}/>
          <Drawer.Screen name="coca" component={coca}  options={{ headerShown: false }}/>
          <Drawer.Screen name="pepsi" component={pepsi}  options={{ headerShown: false }}/>
          <Drawer.Screen name="Arroz" component={Arroz}  options={{ headerShown: false }}/>
          <Drawer.Screen name="feijao" component={feijao}  options={{ headerShown: false }}/>
          <Drawer.Screen name="macarrao" component={macarrao}  options={{ headerShown: false }}/>
          <Drawer.Screen name="file" component={file}  options={{ headerShown: false }}/>
          <Drawer.Screen name="linguica" component={linguica}  options={{ headerShown: false }}/>
          <Drawer.Screen name="picanha" component={picanha}  options={{ headerShown: false }}/>
          <Drawer.Screen name="mortadela" component={mortadela}  options={{ headerShown: false }}/>
          <Drawer.Screen name="presunto" component={presunto}  options={{ headerShown: false }}/>
          <Drawer.Screen name="queijo" component={queijo}  options={{ headerShown: false }}/>
        </Drawer.Navigator>
  );
};

export default Routes;
