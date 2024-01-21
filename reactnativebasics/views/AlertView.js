import { Button, Text, View } from 'react-native';

export default function AlertView() {
    return (
        <View style={{backgroundColor: "yellow", width: 100, height: 100}}>     
          <Text>Open up App.js to start working on your app!</Text>
          <Button title="Click Me" onPress={() => alert("Button Clicked")}/>
         </View>
    );
  }