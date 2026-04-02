import { Text, View, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Header from "./components/Header";
import UIButton from "./components/uiButton";
import categories from "./constants/Categories";
import { useTheme } from './context/useTheme';
import { useRouter } from "expo-router";


const difficulties = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];


const timers = [
  { label: "10 min", value: 600 },
  { label: "25 min", value: 1500 },
  { label: "45 min", value: 2700 },
];

const modes = [
  { label: "📘 Study Mode", value: "study" },
  { label: "📝 Exam Mode", value: "exam" },
];

export default function Index({navigation}) {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [timer, setTimer] = useState(600);
  const [mode, setMode] = useState("study");
  const {theme} = useTheme();

  const router = useRouter();

  // Handles starting the quiz and navigating to QuizPage
  const handleStart = () => {
    if (
      !category || typeof category !== 'string' || category.trim() === "" ||
      !difficulty || typeof difficulty !== 'string' || difficulty.trim() === ""
    ) {
      Alert.alert("Missing Info", "Please select category and difficulty");
      return;
    }
    // navigate to the quiz screen with the selected options
    router.push({
      pathname: "/QuizPage",
      params: { 
        category, 
        difficulty, 
        timer, 
        mode 
      },
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.text }]}>
        
        {/* Category Selection */}
        <Text style={[styles.label, { color: theme.text }]}>Select Category</Text>
        <View style={[styles.pickerWrapper, { backgroundColor: theme.optionBg }]}>
          <Picker
            selectedValue={category}
            onValueChange={setCategory}
            style={{ color: theme.text }}
          >
            {/* ✅ disabled default */}
            <Picker.Item label="Select Category" value="" enabled={false} />
            {categories.map((cat) => (
              <Picker.Item key={cat.id} label={`${cat.icon} ${cat.name}`} value={cat.id.toString()} />
            ))}
          </Picker>
        </View>

        {/* Difficulty Selection */}
        <Text style={[styles.label, { color: theme.text }]}>Select Difficulty</Text>
        <View style={[styles.pickerWrapper, { backgroundColor: theme.optionBg }]}>
          <Picker
            selectedValue={difficulty}
            onValueChange={setDifficulty}
            style={{ color: theme.text }}
          >
            <Picker.Item label="Select Difficulty" value="" enabled={false} />
            {difficulties.map((d) => (
              <Picker.Item key={d.value} label={d.label} value={d.value}/>
            ))}
          </Picker>
        </View>

        {/* Timer Selection */}
        <Text style={[styles.label, { color: theme.text }]}>Choose Timer</Text>
        <View style={styles.row}>
          {timers.map((t) => (
            <UIButton
              key={t.value}
              label={t.label}
              onPress={() => setTimer(t.value)}
              style={[
                styles.timerBtn,
                {
                  backgroundColor: timer === t.value ? theme.primary : theme.optionBg,
                  borderWidth: 2,
                  borderColor: timer === t.value ? theme.primary : 'transparent',
                },
              ]}
              textStyle={{
                color: timer === t.value ? theme.buttonText : theme.text,
                fontWeight: timer === t.value ? 'bold' : 'normal',
              }}
            />
          ))}
        </View>

        {/* Mode Selection */}
        <Text style={[styles.label, { color: theme.text }]}>Mode:</Text>
        <View style={styles.row}>
          {modes.map((m) => (
            <UIButton
              key={m.value}
              label={m.label}
              onPress={() => setMode(m.value)}
              style={[
                styles.modeBtn,
                {
                  backgroundColor: mode === m.value ? theme.primary : theme.optionBg,
                  borderWidth: 2,
                  borderColor: mode === m.value ? theme.primary : 'transparent',
                },
              ]}
              textStyle={{
                color: mode === m.value ? theme.buttonText : theme.text,
                fontWeight: mode === m.value ? 'bold' : 'normal',
              }}
            />
          ))}
        </View>

        {/* Start Quiz Button */}
        <UIButton
          label="[ Start Quiz ]"
          onPress={handleStart} 
          style={[styles.startBtn, { backgroundColor: theme.primary }]}
          textStyle={{ color: theme.buttonText, fontSize: 18 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: 24,
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 16,
  },
  pickerWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  timerBtn: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: '#E5E7EB',
  },
  modeBtn: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: '#E5E7EB',
  },
  startBtn: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
