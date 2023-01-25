import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//import { Icon } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthProvider } from "./src/context/AuthContext";
//import AppNav from "./src/navigation/AppNav";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View>
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
      <TouchableOpacity
        style={{
          backgroundColor: "#ad40af",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
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

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
