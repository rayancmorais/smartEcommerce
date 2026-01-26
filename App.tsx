import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppSafeView from "./src/components/views/AppSafeView";
import AppText from "./src/components/texts/AppText";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView style={styles.container}>
        <AppText variant="medium">Hello, world!</AppText>
        <AppText
          onPress={() => {
            showMessage({
              message: "Hellow, wordl ˆ-ˆ",
              color: "yellow",
              type: "success",
            });
          }}
          variant="bold"
        >
          Hello, world!
        </AppText>
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
