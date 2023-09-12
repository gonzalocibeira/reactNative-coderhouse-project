import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const CategoryItem = ({ item, setCategory }) => {
  return (
    <View>
      <Pressable onPress={()=>setCategory(item)}>
        <Text style={styles.categoryText}>{item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 22,
    marginHorizontal: 20,
    marginVertical: 8,
    color: colors.robinBlue,
    alignItems: "center",
    justifyContent: "center",

    // Border styles
    borderColor: colors.robinBlue,
    borderWidth: 2,
    borderRadius: 20,

    // Text styles
    textAlign: "center",
    padding: 8,
  },
});

export default CategoryItem;