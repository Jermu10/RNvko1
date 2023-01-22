import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';


export default function tehtava1() {

    const [text, setText] = useState('')

    const buttonPressed = () => {
      console.log('nappia painettu')
      Alert.alert('Hello', 'Syötit arvon ' + text)
    }

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.inputComponent}
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button title="Click me" onPress={buttonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputComponent: {
    width: 200,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1
  }
});