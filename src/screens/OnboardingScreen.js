import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import GamingImg from "../assets/images/misc/gaming.svg";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

export function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#20315f",
            /* fontFamily: "inter-bold", */
          }}
        >
          Gameon
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GamingImg
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#ad40af",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
          Let's Begin
        </Text>
        <Icon name="rocket" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
