import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView} from 'react-native';
import Tehtava1 from './components/Tehtava1';
import Tehtava2 from './components/Tehtava2';
import Tehtava3 from './components/Tehtava3';

export default function App() {


  return (
    <View>
      <ScrollView>
        <Tehtava2 />
        <Tehtava3 />
        <Tehtava1 />
      </ScrollView>
    </View>
    )};
