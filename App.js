import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/Navigation/RootNavigation";

import { useFonts } from "expo-font";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/Fonts/RobotoSlab.ttf"),
    Nunito: require("./assets/Fonts/Nunito.ttf"),
  });

  if (!fontsLoaded) {
    return ;
  }

  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});