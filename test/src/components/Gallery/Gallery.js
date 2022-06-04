import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";

export const Gallery = ({ data, choseImg }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableHighlight onPress={() => choseImg(index)} key={item.id}>
          <View style={styles.container_img}>
            <Image
              key={item.id}
              style={styles.img}
              source={{
                uri: `${item.urls.small}`,
              }}
            />
            <View style={styles.description}>
              <Text>Author:</Text>
              <Text style={styles.name}>{item.user.name}</Text>
              <Text>Description:</Text>
              <Text style={styles.description_text}>{item.description}</Text>
            </View>
          </View>
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
  },
  container_img: {
    width: 150,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 10,
    padding: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 4,
    paddingBottom: 10,
  },
  description_text: {
    paddingLeft: 4,
    paddingTop: 10,
  },
});
