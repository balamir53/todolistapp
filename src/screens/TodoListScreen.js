import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const markAsComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markAsComplete={markAsComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TodoListScreen;