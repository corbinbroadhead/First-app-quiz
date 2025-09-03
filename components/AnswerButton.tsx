import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type AnswerButtonProps = {
  text: string;
  altColor?: string;
  onPress?: () => void;
  children?: React.ReactNode;
};

const AnswerButton = ({ text, altColor, onPress, children }: AnswerButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={[styles.text, { color: altColor || "white" }]}>
        {text}
      </Text>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#241773",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AnswerButton;
