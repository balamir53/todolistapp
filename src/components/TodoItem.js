import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, markAsComplete, deleteTodo, ...props }) => {
  return (
    <View style={[styles.container, todo?.completed && styles.completed]}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => markAsComplete && markAsComplete(todo?.id)}
      >
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo?.text || "Todo item"}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo && deleteTodo(todo?.id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  completed: {
    backgroundColor: '#f8f9fa',
    opacity: 0.7,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  deleteButton: {
    padding: 10,
    marginLeft: 10,
  },
  deleteText: {
    fontSize: 20,
    color: '#ff4757',
    fontWeight: 'bold',
  },
});

export default TodoItem;
