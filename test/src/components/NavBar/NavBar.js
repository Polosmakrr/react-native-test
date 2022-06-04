import { StyleSheet, Text, View } from "react-native";

export const NavBar = () => {
  return (
    <View style={styles.nav}>
      <Text style={styles.text}>Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
