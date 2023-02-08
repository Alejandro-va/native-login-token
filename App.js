import * as React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

//SCREENS

import AuthStack from "./src/navigation/AuthStack";
import AppNav from "./src/navigation/AppNav";

export default function App() {
  return (
    <NavigationContainer>
      <AppNav />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

/* const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Component</Text>
    </View>
  );
}; */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
