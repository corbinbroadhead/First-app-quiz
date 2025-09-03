import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type CheatButtonProps = {
  onPress: () => void;
  text?: string;
};

const CheatButton = ({ onPress, text = "CHEAT" }: CheatButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
  },
  text: {
    color: "blue",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CheatButton;
