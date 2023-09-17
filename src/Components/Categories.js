import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../Data/categories";
import CategoryItem from "./CategoryItem";
import { colors } from "../Global/colors";

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 20,
  },
});

export default Categories;