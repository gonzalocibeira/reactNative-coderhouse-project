import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { React, useState } from "react";
import Header from "../Components/Header";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";
import { fireDb } from "../Firebase/firebase.js";
import { getDoc, doc} from "firebase/firestore";


const Profile = ({route, navigation}) => {

  const [fireText, setFireText] = useState("");

  const readFirebase = async () => {
    const snap = await getDoc(doc(fireDb,"staticFields","vj2NYomlq6H7uoVaLJwk"))
    setFireText(snap.data().placeholder)
  }

  return (
    <View>
        <Header title="My Profile" />
        <View style={{ alignItems: "center", marginTop: 15 }}>
            <Image style={styles.image} source={{uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=826&t=st=1695766977~exp=1695767577~hmac=5e524fbd76c178bc299fe46f4f77f0c741125389ce550107ebc433608ec97da7",}}/>
            <View style={styles.dbcontainer}>
              <View style={styles.containerButtonR}>
                <Text>Press this button to read text from Firebase:</Text>
                <Pressable style={styles.containerIcon} onPress={()=>readFirebase()}>
                  <Entypo name="database" size={24} color="black" />
                </Pressable>
                <Text>{fireText}</Text>
              </View>
            </View>
            <View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.containerIcon}>
                        <Entypo name="cog" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textButton}>Account settings</Text>
                </View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.containerIcon}>
                        <Entypo name="credit" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textButton}>Payment methods</Text>
                </View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.containerIcon} onPress={()=>navigation.navigate("location")}>
                        <Entypo name="direction" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textButton}>My location</Text>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
  },
  containerButton: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerButtonR: {
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
    borderColor: colors.pink,
  },
  textButton: {
    marginLeft: 15,
    fontFamily: "Roboto",
    fontSize: 20,
  },
  dbcontainer: {
    marginTop: 10,
  }
});

export default Profile;