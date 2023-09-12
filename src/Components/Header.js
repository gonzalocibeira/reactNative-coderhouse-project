import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginTop: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.robinBlue,
    fontFamily: "Roboto",
  },
});

export default Header;