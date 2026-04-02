import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './components/Header';
import hardQuestions from './data/hardQuestion';
import mediumQuestions from './data/middleQuestion';
import easyQuestions from './data/easyQuetsion';
import { useTheme } from './context/useTheme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizPage = () => {
  const router = useRouter();
  const { category, difficulty, timer, mode } = useLocalSearchParams();
  const { theme } = useTheme();

  const [timeleft, setTimeLeft] = useState(Number(timer) || 30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [breakdown, setBreakdown] = useState([]);
  const [startTime] = useState(Date.now());

  // Select questions based on difficulty
  let questionsArray;
  if (difficulty === 'hard') questionsArray = hardQuestions;
  else if (difficulty === 'medium') questionsArray = mediumQuestions;
  else questionsArray = easyQuestions;

  const filteredQuestions = questionsArray.filter(q => q.category === category);
  const question = filteredQuestions[currentQuestion];

  // Handle next question or finish quiz
  const handleNext = async () => {
    const isCorrect = selectedAnswer === question.answer;
    const updatedScore = isCorrect ? score + 1 : score;

    const newEntry = {
      q: currentQuestion + 1,
      selectedAnswer,
      correct: isCorrect,
      question: question.question,
      options: question.options,
      answer: question.answer
    };

    const updatedBreakdown = [...breakdown, newEntry];
    setBreakdown(updatedBreakdown);
    setScore(updatedScore);
    setSelectedAnswer(null);

    // Save history in AsyncStorage
    try {
      const history = JSON.parse(await AsyncStorage.getItem('@quiz_history')) || [];
      history.push({
        category,
        difficulty,
        mode,
        score: updatedScore,
        total: filteredQuestions.length,
        breakdown: updatedBreakdown,
        timeUsed: Math.floor((Date.now() - startTime) / 1000)
      });
      await AsyncStorage.setItem('@quiz_history', JSON.stringify(history));
    } catch (e) {
      console.log('Error saving quiz history', e);
    }

    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const timeUsed = Math.floor((Date.now() - startTime) / 1000);
      router.push({
        pathname: '/ResultPage',
        params: {
          score: updatedScore,
          total: filteredQuestions.length,
          timeUsed,
          breakdown: JSON.stringify(updatedBreakdown)
        }
      });
    }
  };

  // Timer effect
  useEffect(() => {
    if (timeleft <= 0) {
      const timeUsed = Math.floor((Date.now() - startTime) / 1000);
      router.push({
        pathname: '/ResultPage',
        params: {
          score,
          total: filteredQuestions.length,
          timeUsed,
          breakdown: JSON.stringify(breakdown),
        },
      });
      return;
    }

    const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeleft]);

  if (!question) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Header />
        <Text style={{ color: theme.text }}>No questions found.</Text>
      </View>
    );
  }

  const minutes = Math.floor(timeleft / 60);
  const seconds = timeleft % 60;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />

      {/* Timer */}
      <View style={styles.timerContainer}>
        <View style={[styles.timer_icon, { flexDirection: 'row', alignItems: 'center' }]}>
          <Ionicons name="timer" size={20} color={theme.text} />
          <Text style={[styles.timerText, { color: theme.text }]}>
           {minutes}:{seconds < 10 ? '0' : ''}{seconds}
          </Text>
        </View>
        <View style={styles.timer_questions}>
          <Text style={[styles.timer_questions_text, { color: theme.text }]}>
            <Text style={{ fontWeight: 'bold', marginRight: 5 }}> Questions:</Text>{currentQuestion + 1} / {filteredQuestions.length}
          </Text>
        </View>
      </View>

      {/* Question */}
      <Text style={[styles.question, { color: theme.text }]}>{question.question}</Text>

      {/* Options */}
      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = option === question.answer;
        const optionletter = ['A', 'B', 'C', 'D'][index] || String.fromCharCode(65 + index);

        let bgColor = theme.card;
        if (mode === 'study' && selectedAnswer) {
          if (isCorrect) bgColor = 'lightgreen';
          else if (isSelected) bgColor = 'lightcoral';
        } else if (isSelected) {
          bgColor = 'lightblue';
        }

        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, { backgroundColor: bgColor }]}
            onPress={() => {
              // if (mode === 'exam' && selectedAnswer) return; // Lock selection in exam mode
              setSelectedAnswer(option);
            }}
          >
            <Text style={{ color: theme.text }}>{optionletter}. {option}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextBtn,
          { backgroundColor: theme.primary },
          !selectedAnswer && { opacity: 0.5 }
        ]}
        disabled={!selectedAnswer}
        onPress={handleNext}
      >
        <Text style={{ color: '#fff' }}>
          {currentQuestion === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  timerContainer: {
    marginTop: 16,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    paddingBottom: 8,
    paddingHorizontal: 16,
    width: '70%',
    marginLeft: '10%',
  },
  timer_icon: {
    gap: 10,
  },
  timer_questions: {
    gap: 20,
  },
  timer_questions_text: {
    fontSize: 16,
    fontWeight: 'bold',
    gap: 10,
  },
  watchIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },  
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  nextBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 80,
    alignSelf: 'flex-end',
    width: 100,
    justifyContent: 'center',
  },
});