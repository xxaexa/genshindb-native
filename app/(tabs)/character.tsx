import { Container, Head, Button } from "../../components/";
import {
  useGetCharactersQuery,
  useSearchCharactersQuery,
} from "../../redux/api/genshinApi";
import { FlatList } from "react-native";
import Card from "../../components/card/Card";
import { Text } from "react-native";
import { IGenshinResponse } from "../../types";
import { StatusBar } from "expo-status-bar";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

export default function Page() {
  const { data: characters, isLoading } = useGetCharactersQuery();

  const [search, setSearch] = useState("");

  const { data: charactersSearched } = useSearchCharactersQuery(search);

  const handleSearch = (text: string) => {
    setSearch(text);
    console.log(charactersSearched);
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
          data={characters}
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
      ) : charactersSearched?.length === 0 ? (
        <Text className="bg-red-400 w-32 mx-auto p-4 rounded-lg mt-12 text-white">
          Data not found
        </Text>
      ) : (
        <FlatList
          data={charactersSearched}
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
