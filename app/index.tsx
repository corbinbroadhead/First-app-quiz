import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const questions = [
  {
    text: "Despite being one of the NFL's youngest teams, the Ravens have won two Super Bowls. That is the same total or more than some of the NFL's oldest franchises; the Bears, Cardinals, Eagles, and Lions, among others.",
    answer: true,
  },
  {
    text: "The two Ravens to win Super Bowl MVP are Joe Flacco and Jamal Lewis.",
    answer: false,
  },
  {
    text: "Despite the Ravens having two Super Bowl wins, the city of Baltimore has 3.",
    answer: true,
  },
  {
    text: "The career leader in rushing yards for the Ravens is quarterback Lamar Jackson.",
    answer: false,
  },
  {
    text: "The Ravens narrowly beat out the Dallas Cowboys for the best all-time winning percentage in NFL history.",
    answer: true,
  },
];

export default function Index() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [orientation, setOrientation] = useState<string>("UNKNOWN");
  const router = useRouter();

  // ORIENTATION HANDLING
  useEffect(() => {
    (async () => {
      const o = await ScreenOrientation.getOrientationAsync();
      setOrientation(ScreenOrientation.Orientation[o]);
    })();
  
    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      const o = event.orientationInfo.orientation;
      setOrientation(ScreenOrientation.Orientation[o]);
    });
  
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);
  
  const isPortrait = orientation === "PORTRAIT_UP" || orientation === "PORTRAIT_DOWN";


  const handleAnswer = (answer: boolean) => {
    if (answer === questions[currentQuestion].answer) {
      alert("Correct!");
      navigate(true);
    } else {
      alert("Incorrect!");
      navigate(true);
    }
  };

  const navigate = (next: boolean) => {
    if (next) {
      // go forward
      setCurrentQuestion((prev) => (prev >= questions.length - 1 ? 0 : prev + 1));
    } else {
      // go backward
      setCurrentQuestion((prev) => (prev <= 0 ? questions.length - 1 : prev - 1));
    }
  };

  return(
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        margin: 20,
        paddingBottom: 60,
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 50, textAlign: "center", fontSize: 16 }}>
        {questions[currentQuestion].text}
      </Text>

      <View style={{ flexDirection: "row", gap: 30, marginBottom: 20 }}>
        <Pressable
          onPress={() => handleAnswer(true)}
          style={{
            backgroundColor: "#241773",
            paddingVertical: 12,
            paddingHorizontal: 30,
            marginRight: 10,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            TRUE
          </Text>
        </Pressable>

        <Pressable
          onPress={() => handleAnswer(false)}
          style={{
            backgroundColor: "#241773",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            FALSE
          </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
        <Pressable
          onPress={() => navigate(false)}
          style={{
            backgroundColor: "#241773",
            paddingVertical: 8,
            paddingHorizontal: 24,
            marginTop: 12,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
          <FontAwesome name="chevron-left" size={12} color="white" />   PREV
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigate(true)}
          style={{
            backgroundColor: "#241773",
            paddingVertical: 8,
            marginTop: 12,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            NEXT   <FontAwesome name="chevron-right" size={12} color="white" />
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/cheat",
            params: { answer: questions[currentQuestion].answer ? "1" : "0" },
          })
        }
        style={{
          marginTop: 30,
        }}
      >
        <Text style={{ color: "blue", fontSize: 16 }}>CHEAT</Text>
      </Pressable>
    </View>
  );
}