import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ListItem = ({ item, removeItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.list}> {item.text} </Text>
      <View>
        <Pressable style={styles.button} onPress={() => removeItem(item.id)}>
            <Ionicons name="trash" size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    list: {
        fontSize: 20,
        marginVertical: 2,
    },
    button: {
        marginLeft: 15,
    },
});

export default ListItem;