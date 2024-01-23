import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])


  function taskInputHandler(task) {
    setTask(task)
  }

  function addNewTask() {
    setTaskList((currentList) =>  [...currentList, task])
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputBox} 
        placeholder='Enter task details'
        onChangeText={taskInputHandler}
         />
        <Button 
        title='Add Task' 
        onPress={addNewTask}
        />
      </View>
      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewTitle}>Your Tasks:</Text>

        <ScrollView>
        {taskList.map((task, index) => {

          return ( 
          <View style={styles.taskItemStyle} key={index}>
            <Text style={styles.taskItemTextStyle}>{index + 1}:{task}</Text>
          </View>
          )
        })}
        </ScrollView>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    paddingTop: 45,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#EEEFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    width: '75%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    marginRight: 3,
    borderRadius: 5,
  },
  taskListSection: {
    backgroundColor: '#FFFFFF',
    flex: 6,

  },
  taskOverviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItemStyle: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#EEEFFD',
  },
  taskItemTextStyle: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#EEEFFD',
  }
});


