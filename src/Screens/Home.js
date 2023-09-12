import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = ({setCategory}) => {
  return (
    <View>
      <Header title="Categories"/>
      <Categories setCategory={setCategory}/>
    </View>
  );
};

export default Home;