import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import { products } from "../Data/products";
import ProductItem from "../Components/ProductItem";
import { Entypo } from '@expo/vector-icons';
import { colors } from "../Global/colors";
import { useSelector } from "react-redux";

const Products = ({ route, navigation }) => {

  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  const { item } = route.params;

  const products = useSelector((state) => state.homeSlice.allProducts);

  const productsFilterByCategory = useSelector(
    (state) => state.homeSlice.productsFilterByCategory
  );

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title.toLowerCase() === text.toLowerCase());
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={()=>navigation.navigate("home")}>
          <Entypo name="home" size={36} color="black" style={styles.homeIcon}/>
        </Pressable>
      </View>
      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    color: colors.pink,
  }});

export default Products;