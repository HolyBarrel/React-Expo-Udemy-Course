import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder='Enter task details' />
        <Button title='Add Task' />
      </View>
      <View>
        <Text>Your Tasks:</Text>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    width: '75%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    marginRight: 3,
    borderRadius: 5,
  }
});


