import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);
  const [savedCalc, setSavedCalc] = useState([]);

  const saveCalculation = (currentCalc) => {
    setSavedCalc([...savedCalc, { key: currentCalc }])
  }

  const numAddition = () => {
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);

    setResult(0);
    setResult(intNum1 + intNum2);

    saveCalculation(num1 + " + " + num2 + " = " + (intNum1 + intNum2));
  }

  const numSubstract = () => {
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);

    setResult(0);
    setResult(intNum1 - intNum2);

    saveCalculation(num1 + " - " + num2 + " = " + (intNum1 - intNum2));
  }


  return (
    <View style={styles.container}>

      <View style={styles.container}>
      <Text>Result: {result}</Text>
  
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num1 => setNum1(num1)}
        value={num1}
        keyboardType="numeric"
      />
      
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num2 => setNum2(num2)}
        value={num2}
        keyboardType="numeric"
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button onPress={numAddition}title="  +  " />
        <Button onPress={numSubstract}title="  -  " />
      </View>

      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>History</Text>
        <FlatList style={styles.list} 
          data={savedCalc}
          renderItem={({ item }) => <Text>{ item.key }</Text>}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
