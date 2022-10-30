import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { addToFavorite } from "../Redux/Slices/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";

function Favorites({ data }) {
  const favorite = useSelector((state) => state.favoriteReducer.favorite);

  return (
    <View Style={styles.card}>
      <Image Style={styles.card} />
      <View>
        <Text>{favorite.title}</Text>
        <Text>{favorite.overview}</Text>
        <Button title="Add" Style="btn btn-primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 240,
  },
});

export default Favorites;
