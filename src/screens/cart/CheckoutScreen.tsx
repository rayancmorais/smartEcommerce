import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import AppTextInput from "../../components/inputs/AppTextInput";
import {
  commomCardStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { IS_Android } from "../../constants/constants";

const CheckoutScreen = () => {
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Address Details" />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSaveView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commomCardStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_Android ? vs(15) : vs(10),
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
