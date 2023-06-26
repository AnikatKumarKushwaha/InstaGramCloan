import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Messages from "../component/Messages";

function ChatPage({ navigation }) {
  return (
    <View style={style.mainContainer}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={navigation.goBack} style={{ marginLeft: 10 }}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <View style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            anikat_kushwaha
          </Text>
        </View>
        <View>
          <AntDesign
            style={{ marginLeft: 50 }}
            name="videocamera"
            size={30}
            color="black"
          />
        </View>
        <View>
          <SimpleLineIcons
            style={{ marginLeft: 20 }}
            name="note"
            size={28}
            color="black"
          />
        </View>
      </View>
      <View style={style.textInput}>
        <TextInput
          style={{
            paddingLeft: 10,
            backgroundColor: "#f0f8ffd0",
            width: "100%",
            height: 40,
          }}
          placeholder="Search"
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <Text style={{ fontSize: 20, marginLeft: 7 }}>Messages</Text>
        <View style={{ marginLeft: 200 }}>
          <Text style={{ fontSize: 20, color: "#1698e3" }}>Requests</Text>
        </View>
      </View>
      <Messages />
    </View>
  );
}
export default ChatPage;

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    marginTop: 30,
    width: "95%",
    height: 40,
    marginHorizontal: 9,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "#e1dede96",
  },
});
