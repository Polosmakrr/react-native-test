import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const Input = ({ setQuerry }) => {
  const [value, setValue] = useState("");

  const onPress = () => {
    setQuerry(value);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Let's serch image"
        onChangeText={setValue}
        value={value}
        style={styles.input}
      />
      <Button color="orange" title="Go!" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    width: "60%",
    paddingLeft: 10,
    marginRight: 20,
  },
});
