import { View, Pressable } from "react-native";

const Reset = () => {
  return (
    <View className="flex flex-row space-x-4 justify-center w-full items-center">
      <Pressable>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Reset;
