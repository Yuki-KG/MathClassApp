import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { shape, string, number } from 'prop-types';

export default function Test(props) {
  const { route } = props;
  const { operation, questions, difficulty } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{operation}</Text>
        <Text>{difficulty}</Text>
        <Text>
          問題 1/
          {questions}
        </Text>
        <Text>2 + 3</Text>
        <TextInput />
      </View>
    </View>
  );
}

Test.propTypes = {
  route: shape({
    params: shape({
      operation: string,
      questions: number,
      difficulty: number,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
});
