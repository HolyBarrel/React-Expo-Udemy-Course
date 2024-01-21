import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AlertView from './views/AlertView';

export default function App() {
  return (
    <View style={styles.container}>

      <AlertView/>
      <Text style={styles.text}>Welcome to my app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "darkslateblue",
     fontSize: 30
  }
});


