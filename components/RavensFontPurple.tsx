import { Text } from "react-native";

type RavensFontPurpleProps = {
    text: string;
}

const RavensFontPurple = ({ text }: RavensFontPurpleProps) => {
    return (
      <Text
        style={{
          color: "#241773",
          textShadowColor: "black",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 0,
          borderColor: "gold",
          borderWidth: 1,
        }}
      >
        {text}
      </Text>
    );
  };
  
export default RavensFontPurple;