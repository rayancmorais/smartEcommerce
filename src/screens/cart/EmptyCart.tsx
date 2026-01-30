import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/texts/AppText";
import App from "../../../App";
import { s } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your cart is empty</AppText>
      <AppText style={styles.subtitle}>
        Add some products to your cart to see them here.
      </AppText>
      <AppButton
        title="Start Shopping"
        style={styles.button}
        onPress={() => navigation.navigate("Home" as never )}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: s(10),
  },
  subtitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    textAlign: "center",
    marginBottom: s(10),
  },
  button: {
    marginTop: s(20),
  },
  icon: {
    marginBottom: s(20),
    opacity: 0.8,
  },
});
