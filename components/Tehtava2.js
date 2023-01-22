import { StyleSheet, Text, View, Button, TextInput, number} from 'react-native';
import { useState } from "react";

export default function Tehtava2() {
    
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState('')


    const plusbuttonPressed = () => {
        console.log('plus nappia painettu')
        setResult(parseInt(number1) + parseInt(number2))
    };

    const minusbuttonPressed = () => {
        console.log('minus nappia painettu')
        setResult(parseInt(number1) - parseInt(number2))
    };
    
   
   
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textTheme}>Result: {result}</Text>
                <TextInput 
                style={styles.inputComponent}
                value={number}
                keyboardType='numeric'
                onChangeText={number => setNumber1(number)}
                />

                <TextInput
                style={styles.inputComponent}         
                value={number}
                keyboardType='numeric'
                onChangeText={number => setNumber2(number)}
                />
            </View>
            <View style={styles.buttoncomponents}>
                <Button title="+" onPress={plusbuttonPressed} />
                <Button title="-" onPress={minusbuttonPressed} />
            </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
    },
    inputComponent: {
      width: 200,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1
    },
    buttoncomponents: {
        flexDirection: 'row',
        width: 200,
        height: 40,
        justifyContent: 'center',
    },
    textTheme: {
        fontSize: 20,
    }
});
