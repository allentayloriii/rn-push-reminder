import usePush from "@/hooks/usePush";
import Galaxies from "@/modules/galaxies";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { registerForPushNotificationsAsync } = usePush();
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log("Push notification token:", token);
        if (token) {
          setExpoPushToken(token);
        }
      })
      .catch((error) => {
        console.error("Error getting push notification token:", error);
      });
  }, [registerForPushNotificationsAsync]);

  return (
    <View style={styles.container}>
      <Text>{Galaxies.hello()}</Text>
      <Text>{Galaxies.PI}</Text>
      <Text>{expoPushToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 10,
  },
});
