import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome back 👋</Text>
      <Text style={styles.date}>Today</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Summary</Text>
        <Text>📘 Classes Today: 0</Text>
        <Text>📝 Assignments Due: 0</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryText}>Go to Calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Open Journal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40
  },
  date: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  primaryButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  primaryText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  secondaryText: {
    color: "#007AFF",
    fontSi
