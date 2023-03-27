import React, {Component} from "react";
import {View, Text, StyleSheet } from "react-native";

export default class App extends Component{
  render(){
    return (
      <View style={estilos.container}>
      <Text style={estilos.fonte}>Ola Mundo</Text>
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

  fonte:{
    fontSize: 50,
  },
});