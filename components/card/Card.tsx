import { View, Image } from "react-native";
import { RenderProps } from "../../types";
import RegularText from "../text/RegularText";
import { getStar } from "../../utils";

const Card = ({ item }: RenderProps) => {
  return (
    <View className="w-[170px] text-center bg-card-color p-2 rounded-lg my-3 mx-2.5">
      <Image
        source={{ uri: item.url }}
        className="w-[155px] h-[155px] mx-auto"
        resizeMode="contain"
      />
      <RegularText text={item.name} />
      <RegularText text={getStar(item.star)} />
    </View>
  );
};

export default Card;
