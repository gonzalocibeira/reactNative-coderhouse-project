import { View, Text } from "react-native";
import React from "react";
import Categories from "../Components/Categories";

const Home = ({navigation}) => {
  return (
    <View>
      <Categories navigation={navigation}/>
    </View>
  );
};

export default Home;