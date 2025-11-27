import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome 👋</Text>
      <Text style={styles.date}>Today</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Summary</Text>
        <Text>📘 Classes: 0</Text>
        <Text>📝 Assignments: 0</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40
  },
  date: {
    color: "#777",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#F2F2F2",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
