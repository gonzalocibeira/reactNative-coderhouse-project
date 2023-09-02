import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable, TextInput} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import AddItem from "./src/AddItem";
import ListItem from "./src/ListItem";

const initialList = [
  { id: 1, text: "Headphones" },
  { id: 2, text: "Watch" },
  { id: 3, text: "Phone" },
];

export default function App() {

  const [text, setText] = useState("");
  const [itemList, setItemList] = useState(initialList);

  const addItem = () => {
    itemList.push({
      id: Math.random(),
      text: text,
    });

    setItemList(itemList);
    setText("");
  };

  const removeItem = (id) => {
    let filteredList = [];
    itemList.forEach((item) => {
      if (item.id != id){filteredList.push(item)}
    });
    setItemList(filteredList);
  };

  const clearList = () => {
    setItemList([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>Hola, Coder!</Text>
      <Text>Segunda entrega Coderhouse</Text>
      <Text style={styles.titulo}> Lista de compras </Text>
      <AddItem text={text} setText={setText} addItem={addItem}/>
      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} removeItem={removeItem} />}
      />
      <View style={styles.container}>
        <Text>Clear all</Text>
        <Pressable style={styles.button} onPress={() => clearList()}>
          <Ionicons name="trash" size={40} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperText:{
    marginTop: 100,
  }
});
