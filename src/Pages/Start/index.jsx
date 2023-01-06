//Descrição da primeira página
//botão continuar primeira página

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../Components/Common/DefaultButton";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {
  const navigation = useNavigation();

  const handleNavAppExplanation = () => {
    navigation.navigate("AppExplanation");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/icons/logo3.png")}
            style={styles.logo}
          />
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "}
            o melhor nível.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={240}
            height={40}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 280,
    height: 60,
    marginTop: 80,
    marginBottom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 40,
  },
});