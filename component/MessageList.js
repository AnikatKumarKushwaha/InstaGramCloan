import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function MessageList({ image, tittle, active }) {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={image} />
      </View>
      <View style={style.messageContainer}>
        <Text>{tittle}</Text>
        <Text>Active {active}</Text>
      </View>
      <View style={style.cameraIcon}>
        <AntDesign name="camerao" size={24} color="black" />
      </View>
    </View>
  );
}
export default MessageList;

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 9,
  },
  imageContainer: {
    width: 60,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 16,
  },
  cameraIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    left: 340,
    bottom: 20,
  },
});
