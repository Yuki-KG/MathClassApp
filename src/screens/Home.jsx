import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import RNPickerSelect from 'react-native-picker-select';

export default function Home(props) {
  const { navigation } = props;
  const [operation, setOperation] = useState('');
  const [difficulty, setDifficulty] = useState('1');
  const [questions, setQuestions] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.lead}>
        <Text>どの問題をやりますか？</Text>
      </View>
      <View style={styles.choice}>
        <View style={styles.operation}>
          <RNPickerSelect
            onValueChange={(value) => setOperation(value)}
            items={[
              { label: 'たしざん', value: 'addition' },
              { label: 'ひきざん', value: 'subtraction' },
              { label: 'かけざん', value: 'multiplication' },
              { label: 'わりざん', value: 'division' },
            ]}
            placeholder={{ label: '種類を選択' }}
          />
        </View>
        <View style={styles.questions}>
          <RNPickerSelect
            onValueChange={(value) => setQuestions(value)}
            items={[
              { label: '10問', value: 10 },
              { label: '20問', value: 20 },
              { label: '50問', value: 50 },
              { label: '100問', value: 100 },
            ]}
            placeholder={{ label: '問題数を選択' }}
          />
        </View>
      </View>
      <View style={styles.difficultyChoice}>
        <Text>
          むずかしさ：
          {difficulty}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Difficulty');
          }}
        >
          <Text style={styles.link}>むずかしさとは？</Text>
        </TouchableOpacity>
        <Slider
          style={{
            width: 200,
            height: 40,
          }}
          minimumValue={1}
          maximumValue={6}
          step={1}
          onValueChange={setDifficulty}
        />
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="はじめる"
          color="#467FD3"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{
                name: 'Test',
                params: {
                  operation,
                  questions,
                  difficulty,
                },
              }],
            });
          }}
        />
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  lead: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 8,
    marginBottom: 8,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  operation: {
    flexDirection: 'row',
  },
  questions: {
    flexDirection: 'row',
  },
  difficultyChoice: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  link: {
    color: '#467FD3',
  },
  questionsChoice: {
    paddingTop: 24,
  },
  buttonLayout: {
    paddingVertical: 8,
  },
});
