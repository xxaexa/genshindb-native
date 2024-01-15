import { View, Pressable } from "react-native";

export const Star = () => {
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
    </View>
  );
};
