import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string
}

export default function Welcome({title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 60,
    color: 'red'
  }
});
