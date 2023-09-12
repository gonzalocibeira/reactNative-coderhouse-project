import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import Header from "../Components/Header";
import { products } from "../Data/products";
import ProductItem from "../Components/ProductItem";
import { Entypo } from '@expo/vector-icons';
import { colors } from "../Global/colors";
import ProductDetail from "../Screens/ProductDetail";

const Products = ({ category, setCategory }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);
  const [chosenProduct, setChosenProduct] = useState("");

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === category);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, category]);

  return (
    <View>
      <Header title="Products" />
      <View style={styles.container}>
        <Pressable onPress={()=>setCategory("")}>
          <Entypo name="home" size={36} color="black" style={styles.homeIcon}/>
        </Pressable>
      </View>
      {
        chosenProduct ?
        <ProductDetail chosenProduct={chosenProduct}/> :
        <View>
          <Search text={text} setText={setText} />
          <FlatList
            data={categoryProd}
            keyExtractor={products.id}
            renderItem={({ item }) => <ProductItem item={item} setChosenProduct={setChosenProduct}/>}
          />
        </View>
      }
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