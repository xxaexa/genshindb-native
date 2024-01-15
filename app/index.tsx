import { StyleSheet, Text, View } from "react-native";
import { Button, Container } from "../components";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <Container style="flex-1 items-center justify-center">
      <StatusBar />
      <Text className="uppercase text-xl md:text-3xl text-center text-font-color md:px-52">
        Unoficial Database Genshin Impact
      </Text>
      <Button
        style={"absolute bottom-12"}
        handlePress={() => router.push("/artifact")}
        text="START"
      />
    </Container>
  );
}
