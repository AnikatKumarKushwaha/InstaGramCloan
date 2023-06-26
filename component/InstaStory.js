import { FlatList, Text, View } from "react-native";
import { story } from "../assets/data/dummydata";
import InstaStoryCarosel from "./InstaStoryCarosel";

function InstaStory() {
  return (
    <FlatList
      data={story}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(data) => {
        return (
          <View
            style={{
              borderBottomWidth: 2,
              paddingBottom: 6,
              borderBottomColor: "#f0f8ffd0",
            }}
          >
            <InstaStoryCarosel
              Title={data.item.Title}
              image={data.item.image}
            />
          </View>
        );
      }}
    />
  );
}
export default InstaStory;
