import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InserirTextInput = () => {
  const [text, onChangeText] = React.useState("Inserir Text");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 240,
    margin: 12,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    
  },
});

export default InserirTextInput;