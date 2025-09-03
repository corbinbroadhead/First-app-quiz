import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AnswerButton from "../components/AnswerButton";

export default function Cheat() {
  const { answer } = useLocalSearchParams();
  const isCorrect = answer === "1";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to do this?</Text>

      <AnswerButton
        text="SHOW ANSWER"
        onPress={() =>
          isCorrect ? alert("Answer: TRUE") : alert("Answer: FALSE")
        }
      />
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
});
