import { View, Pressable } from "react-native";

const Element = () => {
  return (
    <View className="flex flex-row space-x-4 justify-center w-full items-center">
      <Pressable>
        <Text>3</Text>
      </Pressable>
      <Pressable>
        <Text>4</Text>
      </Pressable>
      <Pressable>
        <Text>5</Text>
      </Pressable>
      <Pressable>
        <Text>3</Text>
      </Pressable>
      <Pressable>
        <Text>4</Text>
      </Pressable>
      <Pressable>
        <Text>5</Text>
      </Pressable>
    </View>
  );
};

export default Element;
