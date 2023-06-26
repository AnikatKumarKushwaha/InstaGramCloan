import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

function LoginPage({ navigation }) {
  function pressHandeler() {
    navigation.navigate("InstaFeed");
  }
  return (
    <View style={style.mainconatainer}>
      <View style={style.imageContainer}>
        <Image
          source={require("../assets/instagramImagea.png")}
          style={style.image}
        />
      </View>
      <View style={style.infoContainer}>
        <TextInput
          style={style.inputContainer}
          placeholder="Phone number,username or email"
        />
        <TextInput style={style.inputContainer} placeholder="Password" />
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>Forgot password?</Text>
      </View>
      <View style={style.buttonContainer}>
        <Button title="Log In" onPress={pressHandeler} />
      </View>
      <View style={style.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Text style={{ color: "#1698e3", marginLeft: 3 }}>Sign Up</Text>
      </View>
    </View>
  );
}
export default LoginPage;

const style = StyleSheet.create({
  mainconatainer: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "20%",
    marginTop: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "50%",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    height: 43,
    marginTop: 10,
    backgroundColor: "#f0f8ffd0",
    borderRadius: 5,
    borderColor: "#e1dede96",
    borderWidth: 1,
    paddingLeft: 14,
  },
  textContainer: {
    padding: 7,
    left: 250,
  },
  text: {
    color: "#1698e3",
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    top: 240,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#e1dede96",
  },
});
