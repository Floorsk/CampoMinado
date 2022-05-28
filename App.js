import React, { Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import Params from './src/params';
import Field from './src/components/Field';

export default class App extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade: {Params.getRowsAmaout()}x{Params.getColumsAmout}</Text>

        <Field />
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={8}/>
        <Field opened nearMines={5}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})