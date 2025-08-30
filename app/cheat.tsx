import { useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Cheat() {
  const { answer } = useLocalSearchParams();
  const isCorrect = answer === "1";
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Are you sure you want to do this?
      </Text>

      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText} onPress={() => isCorrect ? 
          alert("Answer: TRUE") : alert("Answer: FALSE")
        }>
          SHOW ANSWER
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 50,
  },
  pressable: {
    backgroundColor: "#241773",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  }
});
