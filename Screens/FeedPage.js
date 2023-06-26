import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import InstaStory from "../component/InstaStory";
import InstaFeeds from "../component/InstaFeeds";

function FeedPage({ navigation }) {
  function pressHandeler() {
    navigation.navigate("Messages");
  }
  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={require("../assets/instagramImagea.png")}
          />
        </View>
        <View style={style.likeContainer}>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <Pressable style={style.messengerContainer} onPress={pressHandeler}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <InstaStory />
        <InstaFeeds />
      </ScrollView>
    </View>
  );
}
export default FeedPage;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  imageContainer: {
    width: 180,
    height: 60,
    marginLeft: 20,
  },
  image: {
    width: "70%",
    height: "70%",
  },
  likeContainer: {
    marginLeft: 90,
  },
  messengerContainer: {
    marginLeft: 30,
  },
});
