import { Container, Head, Button } from "../../components/";
import {
  useGetWeaponsQuery,
  useSearchWeaponsQuery,
} from "../../redux/api/genshinApi";
import { FlatList } from "react-native";
import Card from "../../components/card/Card";
import { Text } from "react-native";
import { IGenshinResponse } from "../../types";
import { StatusBar } from "expo-status-bar";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

export default function Page() {
  const { data: weapons, isLoading } = useGetWeaponsQuery();

  const [search, setSearch] = useState("");

  const { data: weaponsSearched } = useSearchWeaponsQuery(search);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const renderItem = ({ item }: { item: IGenshinResponse }) => (
    <Card item={item} />
  );

  return (
    <Container>
      <StatusBar />
      <Head text="CHARACTER" handleSearch={handleSearch} search={search} />
      {isLoading ? (
        <Loading />
      ) : search === "" ? (
        <FlatList
          data={weapons}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            paddingBottom: 50,
          }}
        />
      ) : weaponsSearched?.length === 0 ? (
        <Text className="bg-red-400 w-32 mx-auto p-4 rounded-lg mt-12 text-white">
          Data not found
        </Text>
      ) : (
        <FlatList
          data={weaponsSearched}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            paddingBottom: 50,
          }}
        />
      )}
    </Container>
  );
}
