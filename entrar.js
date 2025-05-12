import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Entrar extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#ff00ff', '#00ffff', '#ff4500']}
        style={styles.container}
      >
        <Text style={styles.resultado}>{this.props.resultado}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => this.props.fechar()}>
          <Text style={styles.botaoTexto}>Fechar</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultado: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#9400d3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Entrar;