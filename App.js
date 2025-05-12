//psicodelico
//para funcionar instale isso npx expo install expo-linear-gradient
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entrar from './entrar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      gasolina: '',
      alcool: '',
      resultado: ''
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    this.calcula = this.calcula.bind(this);
  }

  entrar() {
    this.setState({ visibleModal: true });
  }

  sair(visible) {
    this.setState({ visibleModal: visible });
  }

  calcula() {
    const { gasolina, alcool } = this.state;
    const relacao = parseFloat(alcool) / parseFloat(gasolina);

    if (!isNaN(relacao)) {
      const resultado = relacao > 0.7 ? 'Compensa usar Gasolina' : 'Compensa usar Álcool';
      this.setState({ resultado, visibleModal: true });
    } else {
      alert('Por favor, insira valores válidos para gasolina e álcool.');
    }
  }

  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://wallpapers.com/images/featured-full/fundo-psicodelico-para-iphone-er5q3skuczq5e84h.jpg' }}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.area}>
            <View style={styles.inputWrapper}>
              <LinearGradient
                colors={['red', 'yellow', 'green']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}>
                <TextInput
                  style={styles.input}
                  value={this.state.gasolina}
                  onChangeText={(text) => this.setState({ gasolina: text })}
                  placeholder="Valor da gasolina"
                  keyboardType="numeric"
                  placeholderTextColor="#000"
                />
              </LinearGradient>
            </View>
            <View style={styles.inputWrapper}>
              <LinearGradient
                colors={['blue', 'purple', 'pink']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}>
                <TextInput
                  style={styles.input}
                  value={this.state.alcool}
                  onChangeText={(text) => this.setState({ alcool: text })}
                  placeholder="Valor do álcool"
                  keyboardType="numeric"
                  placeholderTextColor="#000"
                />
              </LinearGradient>
            </View>
            <TouchableOpacity style={styles.botao} onPress={this.calcula}>
  <Text style={styles.botaoTexto}>Calcular</Text>
</TouchableOpacity>
          </View>
          <Modal animationType="slide" visible={this.state.visibleModal} transparent={true}>
            <Entrar fechar={() => this.sair(false)} resultado={this.state.resultado} />
          </Modal>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  area: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: 300,
    height: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputWrapper: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden', 
  },
  gradient: {
    padding: 1, 
    borderRadius: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#000', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  botao: {
   borderRadius: 25,
    backgroundColor: '#39FF14',
    width: 200,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FF6400',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
