import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#25282c" />
    </View>
  );
};

export default Loading;
