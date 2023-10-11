import { StyleSheet, Text, View } from "react-native"; import React, { useEffect, useState } from "react"; 
import * as Location from "expo-location";
import { colors } from "../Global/colors";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({latitude:"", longitude:""});
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("You need to grant location permission")
                return
            }

            let deviceLocation = await Location.getCurrentPositionAsync({});
            setLocation({latitude: deviceLocation.coords.latitude, longitude: deviceLocation.coords.longitude})
        })
    },[]);

    return(
        <View styles={styles.container}>
            <Text> My current coordinates:</Text>
            {location ? (
                <View styles={styles.locContainer}>
                    <Text>Lat: {location.latitude} - Long: {location.longitude}</Text>
                </View>
            ) : (
                <View styles={styles.locContainer}>
                    <Text>{error}</Text>
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center", 
        gap: 20, 
        paddingBottom: 130
    },
    locContainer:{
        width: 200, 
        height: 200, 
        borderWidth: 2, 
        borderColor: colors.robinBlue, 
        padding: 10, 
        justifyContent: "center", 
        alignItems: "center",
    }
})

export default LocationSelector;
