import { View } from "react-native";
import { ContainerProps } from "../../types";

const Container = ({ children, style }: ContainerProps) => {
  return (
    <View className={`bg-bg-color h-screen  mt-12 ${style}`}>{children}</View>
  );
};

export default Container;
