import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView} from "react-native";
import { useState } from "react";

import Home from "./src/Screens/Home";
import Search from "./src/Components/Search";
import Products from "./src/Screens/Products";

import { useFonts } from "expo-font";
import ProductDetail from "./src/Screens/ProductDetail";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/Fonts/RobotoSlab.ttf"),
    Nunito: require("./assets/Fonts/Nunito.ttf"),
  });

  const [category, setCategory] = useState("");

  if (!fontsLoaded) {
    return ;
  }

  return (
    <View style={styles.container}>
      { 
        category ? 
        <Products category={category} setCategory={setCategory}/> :
        <Home setCategory={setCategory}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});