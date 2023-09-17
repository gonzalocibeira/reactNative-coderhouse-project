import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Products from "../Screens/Products";
import ProductDetail from "../Screens/ProductDetail";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={
        ({route}) => (
            {
                header: () => {
                    return <Header title={route.name === "products" ? "Products" : 
                route.name === "productDetail" ? "Details" : 
            route.name === "home" ? "Home" : "MyApp"}/>
                }
            }
        )
    }>
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={Products} name="products" />
      <Stack.Screen component={ProductDetail} name="productDetail" />
    </Stack.Navigator>
  );
};

export default RootNavigation;