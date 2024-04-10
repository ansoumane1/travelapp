import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

function App() {
  return (
    <>
      <Home text="My first components" />
    </>
  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
