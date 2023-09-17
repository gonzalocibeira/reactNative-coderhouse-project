import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";

const ProductDetail = ({ route, navigation }) => {

  const chosenProduct = route.params.item

  return (
    <View>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: chosenProduct.images[2],
          }}
        />
        <Text style={styles.title}> Name: {chosenProduct.title} </Text>
        <Text style={styles.description}>
          {" "}
          Description: {chosenProduct.description}{" "}
        </Text>
        <Text> Rating: {chosenProduct.rating} </Text>
        <Text> Price: {chosenProduct.price} </Text>
      </View>

      <View></View>
      <Button
        color="red"
        title="Add to cart"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Nunito",
  },
  description: {
    fontSize: 20,
    marginVertical: 15,
  },
});

export default ProductDetail;