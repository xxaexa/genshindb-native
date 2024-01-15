import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="artifact"
        options={{
          title: "Artifact",
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "#41474e",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              name="crown"
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="character"
        options={{
          title: "Character",
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "#41474e",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              name="account"
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="weapon"
        options={{
          title: "Weapon",
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "#41474e",
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              style={{ marginBottom: -3 }}
              name="sword"
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
