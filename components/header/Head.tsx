import { View, Text, TextInput, Pressable } from "react-native";
import { HeadProps } from "../../types";
import TitleText from "../text/TitleText";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Head = ({ text, handleSearch, search }: HeadProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <View className="flex flex-row justify-between  items-center py-2 px-4 bg-card-color w-full rounded-b-xl">
      <TitleText text={text} />
      <View className="flex flex-row items-center border-[1px] border-font-color px-2 rounded-lg">
        <AntDesign name="search1" size={16} color="#797d82" />
        <TextInput
          className="w-[72px] px-2 py-0.5 text-sm text-font-color rounded-lg "
          placeholder="Search"
          placeholderTextColor="#797d82"
          onChangeText={handleSearch}
          value={search}
        />
      </View>
    </View>
  );
};

export default Head;
