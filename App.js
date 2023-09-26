import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigation/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

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
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});