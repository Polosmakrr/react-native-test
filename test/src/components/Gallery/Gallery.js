import { StyleSheet, View, Image, TouchableHighlight } from "react-native";

export const Gallery = ({ data, choseImg }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableHighlight onPress={() => choseImg(index)} key={item.id}>
          <Image
            key={item.id}
            style={styles.img}
            source={{
              uri: `${item.urls.small}`,
            }}
          />
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "grey",
  },
  img: {
    width: 150,
    height: 150,
    margin: 10,
  },
});
