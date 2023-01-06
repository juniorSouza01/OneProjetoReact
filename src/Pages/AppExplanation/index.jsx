import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
 // handleNavHome,
 // handleSetShowHome,
} from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";
import { useNavigation } from "@react-navigation/native";
import ChangeNavigationService from "../../Services/ChangeNavigationService";

export default function AppExplanation() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState("false");
  const startDate = new Date();
  const month = `${startDate.getMonth() + 1}`.padStart(2, "0");
  const day = `${startDate.getDate()}`.padStart(2, "0");
  const appStartData = `${startDate.getFullYear()}-${month}-${day}`;

  function handleNavHome() {
    navigation.navigate("Home");
  }
//função para botão "Continuar" (Antes, deixa eu te explicar)
  function handleSetShowHome() {
   
   
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch((err) => console.log(err));
      setShowHome("true");
      handleNavHome();
    }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <ExplanationCard />

          <Text style={styles.description}>
          {"\n"} Vale lembrar {"\n"}{"\n"} Você pode utilizar nossos hábitos padrões 
            Mas também poderá criar seu próprio hábito 
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 22,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 16,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});