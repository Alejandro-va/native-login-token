import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/FontAwesome";

import Carousel from "react-native-new-snap-carousel/src/carousel/Carousel";
import BannerSlider from "../components/BannerSlider";
import { freeGames, paidGames, sliderData } from "../model/data";
import CustomSwitch from "../components/CustomSwitch";
import ListenItem from "../components/ListenItem";

const HomeScreen = ({ navigation }) => {
  /*   const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };
 */
  /******************************************
   * BOTON DE SELECION PAID OR  FREE
   *****************************************/
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto" }}>
            Hello Alejandro
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require("../../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 25 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#c6c6c6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>
        {/*         <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData} //este dato proviene de utils
          renderItem={renderBanner} //constante q esta arriba y maneja el componente BannerSlider
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />*/}
        {/******************************************
         * BOTON DE SELECION PAID OR  FREE
         *****************************************/}
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2={"Paid games"}
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map((item) => <ListenItem item={item} key={item.id} />)}
        {gamesTab == 2 &&
          paidGames.map((item) => <ListenItem item={item} key={item.id} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
