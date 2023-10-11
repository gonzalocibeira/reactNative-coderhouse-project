import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../Screens/Profile"
import LocationSelector from "../Screens/LocationSelector";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen component={Profile} name="profile"/>
      <Stack.Screen component={LocationSelector} name="location"/>
    </Stack.Navigator>
  );
};

export default ProfileNavigation;