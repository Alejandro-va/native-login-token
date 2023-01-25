import React from "react";
import { View, Text, Image } from "react-native";

const BannerSlider = ({ data }) => {
  return (
    <View>
      <Image source={data.Image} style={{ height: 150, width: 300 }} />
    </View>
  );
};

export default BannerSlider;
