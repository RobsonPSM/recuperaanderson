import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Switch, Button } from 'react-native';
import { Text } from 'react-native-paper';

const App = () => {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState(0);
  const [valor, setValor] = useState(0);
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(false);
  const [impostoa, setImpostoa] = useState(0);
  const [impostob, setImpostob] = useState(0);
  const [impostoc, setImpostoc] = useState(0);
  const [res, setRes] = useState(0);

  const handleConfirmPress = () => {
    setImpostoa(valor*0.1)
    if((2023-ano)>65){
      setImpostob(impostoa*0.04)
    }else if(switch1Value == true){
      setImpostob(impostoa*0.06)
    }else{
      setImpostob(impostoa*0.02)
    }

    if(switch2Value== true){
      setImpostoc(impostoa*0.15)
    }else{
      setImpostoc(impostoa*0.1)
    }

    setRes(veiculo+impostoa+impostob+impostoc)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de Nascimento"
        value={ano}
        onChangeText={setAno}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do Veículo"
        value={valor}
        onChangeText={setValor}
      />
      <View style={styles.switchContainer}>
        <Switch
          value={switch1Value}
          onValueChange={setSwitch1Value}
        /><Text>É portador de deficiência?</Text>
        <Switch
          value={switch2Value}
          onValueChange={setSwitch2Value}
        />
      </View><Text>Mora em RJ e/ou SP?</Text>
      <Button
        title="Confirmar"
        onPress={handleConfirmPress}
      />
      <Text>Resultado: {res}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;