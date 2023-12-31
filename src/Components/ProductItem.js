import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const ProductItem = ({ navigation, item }) => {

  return (
    <Pressable onPress={()=> navigation.navigate("productDetail", {item:item})}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        <Image
          style={styles.image}
          height={80}
          width={80}
          source={{ uri: item.images[0] }}
          resizeMode="cover"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.coral,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
    marginLeft: 20,
  },
  image: {
    marginRight: 10,
  },
});

export default ProductItem;
