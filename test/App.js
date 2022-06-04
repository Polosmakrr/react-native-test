import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Gallery } from "./src/components/Gallery/Gallery";
import { Input } from "./src/components/Input/Input";
import { NavBar } from "./src/components/NavBar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

const key = "E8YL-89-T6rQofcJXu5cZUZcebmd4P05HDBM5ruFg6I";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default function App() {
  const [imgArray, setImgArray] = useState([]);
  const [querry, setQuerry] = useState("");
  const [page, setPage] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);
  const [largeImg, setLargeImg] = useState("");

  useEffect(() => {
    axios
      .get(`search/photos?client_id=${key}&page=${page}&query=${querry}`)
      .then(({ data }) => {
        setImgArray(imgArray.concat(data.results));
      })
      .catch((error) => console.log("ERROR:", error));
  }, [querry, page]);

  const changeQuerry = (value) => {
    setQuerry(value);
    setPage(1);
    setImgArray([]);
  };

  const changePage = () => {
    let nextPage = page + 1;
    setPage(nextPage);
  };

  const choseImg = (index) => {
    setLargeImg(imgArray[index].urls.full);
    setToggleModal(!toggleModal);
  };

  const closeModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <View>
      <NavBar />
      <StatusBar style="auto" />
      <View style={styles.centeredView}>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={toggleModal}
        >
          <Pressable style={styles.centeredView} onPressOut={closeModal}>
            <View style={styles.modalView}>
              <Image style={styles.larg_img} source={{ uri: largeImg }} />
            </View>
          </Pressable>
        </Modal>
      </View>
      <View style={styles.container}>
        <Input setQuerry={changeQuerry} />
        <ScrollView style={styles.img_container}>
          <Gallery data={imgArray} choseImg={choseImg} />
          {imgArray.length !== 0 && (
            <Button title="Load More" onPress={changePage} />
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  img_container: {
    marginBottom: 200,
  },
  larg_img: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 20,
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    opacity: 1,
  },
});
