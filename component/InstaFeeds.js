import { Image, StyleSheet, Text, View } from "react-native";
import { story } from "../assets/data/dummydata";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function InstaFeeds() {
  return (
    <View style={style.mainContainer}>
      {story.map((item) => {
        return (
          <View>
            <View style={style.profileContainer}>
              <View style={{ width: 40, height: 40 }}>
                <Image style={style.profileImage} source={item.image} />
              </View>
              <View>
                <Text style={{ marginLeft: 5 }}>{item.Title}</Text>
              </View>
            </View>
            <View style={style.imageContainer}>
              <Image style={style.image} source={item.image} />
            </View>
            <View style={style.feedBackContainer}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="hearto"
                size={24}
                color="black"
              />
              <Feather
                style={{ marginRight: 10 }}
                name="message-circle"
                size={24}
                color="black"
              />
              <Ionicons
                style={{ marginRight: 10 }}
                name="paper-plane-outline"
                size={24}
                color="black"
              />
              <Feather
                style={{ left: 240 }}
                name="bookmark"
                size={24}
                color="black"
              />
            </View>
            <View style={{ marginLeft: 9 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                likes {item.like}
              </Text>
            </View>
            <View style={{ marginLeft: 9, flexDirection: "row" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item.Title}
              </Text>
              <Text style={{ marginLeft: 3 }}>{item.comment}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
export default InstaFeeds;

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 3,
    marginBottom: 50,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    paddingBottom: 40,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 6,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    paddingBottom: 40,
    borderRadius: 50,
    marginLeft: 4,
  },
  feedBackContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 9,
  },
});
