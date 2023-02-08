import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View
      style={{
        height: 44,
        width: "100%",
        backgroundColor: "#e4e4e4",
        borderRadius: 10,
        borderColor: "#ad40f",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {/******************************************
       * BOTON DE SELECION PAID OR  FREE
       *****************************************/}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? "#AD40Af" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "#fff" : "#AD40Af",
            fontSize: 14,
            fontFamily: "Roboto",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={2}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? "#AD40Af" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "#fff" : "#AD40Af",
            fontSize: 14,
            fontFamily: "Roboto",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
