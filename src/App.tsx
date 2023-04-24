import React, {Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Membro from "./componentes/relacao/Membro";
import Familia from "./componentes/relacao/Familia";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";


export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        {/*Simples texto='Lohanna'/>
        {<Frag titulo="Cadastro"
              subTitulo="Tela De Cadrastro"/>
        {<ParImpar numero={12} />

        <Familia>
            <Membro nome="Ana" sobreNome="Silva"/>
            <Membro nome="José" sobreNome="Silva"/>
        </Familia> 

        <UsuarioLogado usuario={{nome:'teste', email:'teste@teste.com'}}/>
        <UsuarioLogado usuario={{nome:'teste 2'}}/>
        <UsuarioLogado usuario={{email:'teste@teste.com'}}/>
        <UsuarioLogado usuario={{ }}/>
        <UsuarioLogado usuario={null}/> */}

        <Contador valorInicial={50}/>
      </View>
    );     
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,
    },
  });