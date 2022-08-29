import React from 'react';
import {Dimensions, StyleSheet, Text, View, Platform} from 'react-native';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text
          style={styles.textHello}>{`React Native for ${Platform.OS}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHello: {
    fontSize: 54,
  },
});

export default App;
