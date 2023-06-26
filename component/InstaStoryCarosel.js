import { Image, StyleSheet, Text, View } from "react-native";

function InstaStoryCarosel({ Title, image }) {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={image} />
      </View>
      <View>
        <Text>{Title}</Text>
      </View>
    </View>
  );
}
export default InstaStoryCarosel;

const style = StyleSheet.create({
  mainContainer: {
    width: 100,
    height: 120,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
    paddingBottom: 40,
    borderRadius: 50,
  },
  titleContainer: {
    width: 100,
    height: 100,
  },
});
