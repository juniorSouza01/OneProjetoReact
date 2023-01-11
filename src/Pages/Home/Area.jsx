import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InserirTextInput = () => {

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Definir Área"
        placeholderTextColor="white"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 240,
    margin: 10,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "rgba(21, 21, 21, 0.98)",
    borderRadius: 8,
    borderColor: "#fff",
    color: "#fff",
  },
});

export default InserirTextInput;