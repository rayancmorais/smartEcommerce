import { Platform } from "react-native";

export const IS_Android = Platform.OS === "android";
export const IS_IOS = Platform.OS === "ios";

export const taxes = 0.07; // 7% taxes
export const shippingFee = 5.99; // Flat shipping fee
// export const freeShippingThreshold = 50; // Free shipping for orders above $50