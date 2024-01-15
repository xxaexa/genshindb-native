import { Pressable } from "react-native";
import RegularText from "../text/RegularText";
import { useRouter } from "expo-router";
import { ButtonProps } from "./../../types/";

const Button = ({ style, handlePress, text }: ButtonProps) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={handlePress}
      className={`bg-card-color px-2 py-2 rounded-lg bg-opacity-50 ${style}`}
    >
      <RegularText text={text} />
    </Pressable>
  );
};

export default Button;
