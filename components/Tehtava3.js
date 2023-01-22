import { StyleSheet, Text, View, Button, TextInput, number, Alert} from 'react-native';
import { useState } from "react";

export default function Tehtava3() {
    
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('Guess a number between 1-100');
    const [guesses, setGuesses] = useState(0);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

    const buttonPressed = () => {
        console.log('nappia painettu')
        setGuesses(guesses + 1)
        if (number == randomNumber) {
            Alert.alert('You guessed the number in ' + guesses + ' guesses')
            reset();
        } else if (number < randomNumber) {
            setResult('Your guess ' + number + ' is too low')
        } else if (number > randomNumber) {
            setResult('Your guess ' + number + ' is too high')
        }
    };

    const reset = () => {
        setGuesses(0)
        setRandomNumber(Math.floor(Math.random() * 100) + 1)
        setResult('Guess a number between 1-100')
    };

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textTheme}>{result}</Text>
                <TextInput 
                style={styles.inputComponent}
                value={number}
                keyboardType='numeric'
                onChangeText={number => setNumber(number)}
                />
                <Button style={styles.buttoncomponents} title="Make a guess" onPress={buttonPressed} />
            </View>    
         </View>

    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 400,
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
        fontSize: 15,
    }
});