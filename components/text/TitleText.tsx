import { Text } from "react-native";
import { TextProps } from "../../types";

const TitleText = ({ text }: TextProps) => {
  return <Text className="uppercase text-xl text-font-color">{text}</Text>;
};

export default TitleText;
