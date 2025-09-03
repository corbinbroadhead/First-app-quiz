import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { addOrientationChangeListener, Orientation, removeOrientationChangeListener, unlockAsync } from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AnswerButton from '../components/AnswerButton';
import CheatButton from "../components/CheatButton";
import NavButton from "../components/NavButton";

const questions = [
  {
    text: "Despite being one of the NFL's youngest teams, the Ravens have won two Super Bowls. That is the same total or more than some of the NFL's oldest franchises; the Bears, Cardinals, Eagles, Lions, and Bills, among others.",
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
  const [currentOrientation, setOrientation] = useState(Orientation.PORTRAIT_UP);
  const router = useRouter();

  // ORIENTAITON 2
  useEffect(() => {
    // add listener
    unlockAsync();
    const subscription = addOrientationChangeListener((event) => {
      setOrientation(event.orientationInfo.orientation);
    });
    return () => {
      removeOrientationChangeListener(subscription);
      // remove listener
    }
  }, []);
  
  ////
  const handleAnswer = (answer: boolean) => {
    if (answer === questions[currentQuestion].answer) {
      alert("Correct!");
      navigate(true);
    } else {
      alert("Incorrect!");
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
      <Text style={{ marginBottom: 30, textAlign: "center", fontSize: 16 }}>
        {questions[currentQuestion].text}
      </Text>

      <View style={{ flexDirection: "row", gap: 30, marginBottom: 20 }}>
        <AnswerButton text="TRUE" onPress={() => handleAnswer(true)} />
        <AnswerButton text="FALSE" onPress={() => handleAnswer(false)} />
      </View>

      <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
        <NavButton
          text="PREV"
          onPress={() => navigate(false)}
          icon={<FontAwesome name="chevron-left" size={12} color="white" />}
          iconPosition="left"
        />

        <NavButton
          text="NEXT"
          onPress={() => navigate(true)}
          icon={<FontAwesome name="chevron-right" size={12} color="white" />}
          iconPosition="right"
        />
      </View>

      <CheatButton
        onPress={() =>
          router.push({
            pathname: "/cheat",
            params: { answer: questions[currentQuestion].answer ? "1" : "0" },
          })
        }
      />
    </View>
  );
}