import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NavButtonProps = {
  text: string;
  onPress: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const NavButton = ({ text, onPress, icon, iconPosition = "left" }: NavButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        {icon && iconPosition === "left" && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.text}>{text}</Text>
        {icon && iconPosition === "right" && <View style={styles.icon}>{icon}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#241773",
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 12,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default NavButton;
