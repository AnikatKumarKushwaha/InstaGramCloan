import { FlatList, Text, View } from "react-native";
import { story } from "../assets/data/dummydata";
import MessageList from "./MessageList";

function Messages() {
  return (
    <View>
      <FlatList
        data={story}
        renderItem={(itemData) => {
          return (
            <MessageList
              image={itemData.item.image}
              tittle={itemData.item.Title}
              active={itemData.item.active}
            />
          );
        }}
      />
    </View>
  );
}
export default Messages;
