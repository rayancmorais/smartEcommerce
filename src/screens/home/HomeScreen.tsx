import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/fonts";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/products";
import { s } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            onAddToCartPress={() => {
              dispatch(addItemToCart(item));
            }}
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: s(10),
          marginTop: s(10),
        }}
        contentContainerStyle={{ paddingHorizontal: s(10) }}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
