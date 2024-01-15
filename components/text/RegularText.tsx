import { Text } from "react-native";
import { TextProps } from "../../types";

const RegularText = ({ text }: TextProps) => {
  return (
    <Text className="uppercase text-sm text-center text-font-color">
      {text}
    </Text>
  );
};

export default RegularText;
