import { StyleSheet, Text, View } from "react-native"; import React, { useEffect, useState } from "react"; 
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { colors } from "../Global/colors";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState();
    const [error, setErrorMsg] = useState("");

    const getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      };
    
    useEffect(() => {
        getLocationAsync();
    }, []);

    return(
        <View styles={styles.container}>
            <View>
                <Text> My current coordinates:</Text>
                {location ? (
                    <View styles={styles.locContainer}>
                        <Text>Lat: {location.coords.latitude} - Long: {location.coords.longitude}</Text>
                    </View>
                ) : (
                    <View styles={styles.locContainer}>
                        <Text>{error}</Text>
                    </View>
                )}
            </View>
            {location && <View>
                <MapView pointerEvents={true} showsUserLocation={true} style={styles.map} region={{latitude: location.coords.latitude, longitude: location.coords.longitude}}/>
            </View>}
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
    },
    map: {
        marginTop: 30,
        width: "100%",
        height: "100%",
      },
})

export default LocationSelector;
