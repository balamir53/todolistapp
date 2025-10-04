import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const TodoList = ({ children, ...props }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 10,
  },
});

export default TodoList;
