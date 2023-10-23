import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileView from "../Screens/Profile"
import LocationSelector from "../Screens/LocationSelector";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen component={ProfileView} name="profile"/>
      <Stack.Screen component={LocationSelector} name="location"/>
    </Stack.Navigator>
  );
};

export default ProfileNavigation;