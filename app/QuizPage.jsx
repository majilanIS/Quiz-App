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

  // Timer for the whole quiz
  const [timeleft, setTimeLeft] = useState(Number(timer) || 30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [breakdown, setBreakdown] = useState([]);
  const [startTime] = useState(Date.now());

  // Select questions
  let questionsArray;
  if (difficulty === 'hard') questionsArray = hardQuestions;
  else if (difficulty === 'medium') questionsArray = mediumQuestions;
  else questionsArray = easyQuestions;

  const filteredQuestions = questionsArray.filter(
    q => q.category === category
  );

  const question = filteredQuestions[currentQuestion];

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

    // Save to AsyncStorage
    try {
      await AsyncStorage.setItem('@quiz_breakdown', JSON.stringify(updatedBreakdown));
      await AsyncStorage.setItem('@quiz_score', updatedScore.toString());
    } catch (e) {
      console.log('Error saving quiz data', e);
    }

    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      // Do not reset timer here for whole-quiz timer
    } else {
      const timeUsed = Math.floor((Date.now() - startTime) / 1000) + 's';
      router.push({
        pathname: '/ResultPage',
        params: {
          score: updatedScore,
          total: filteredQuestions.length,
          timeUsed,
          breakdown: JSON.stringify(updatedBreakdown),
        },
      });
    }
  };

  // Timer for the whole quiz
  useEffect(() => {
    if (timeleft === 0) {
      // When timer runs out, finish the quiz
      const timeUsed = Math.floor((Date.now() - startTime) / 1000) + 's';
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
    const interval = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
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

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />

      <View style={[styles.timerContainer, { backgroundColor: theme.card }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="timer" size={20} color={theme.text} />
          <Text style={[styles.timerText, { color: theme.text }]}>
            {Math.floor(timeleft / 60)}:
            {timeleft % 60 < 10 ? '0' : ''}
            {timeleft % 60}
          </Text>
        </View>

        <Text style={{ color: theme.text }}>
          {currentQuestion + 1} / {filteredQuestions.length}
        </Text>
      </View>

      <Text style={[styles.question, { color: theme.text }]}>
        {question.question}
      </Text>

      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = option === question.answer;

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
            onPress={() => setSelectedAnswer(option)}
          >
            <Text style={{ color: theme.text }}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[
          styles.nextBtn,
          { backgroundColor: theme.primary },
          !selectedAnswer && { opacity: 0.5 },
        ]}
        disabled={!selectedAnswer}
        onPress={handleNext}
      >
        <Text style={{ color: '#fff' }}>
          {currentQuestion === filteredQuestions.length - 1
            ? 'Finish'
            : 'Next'}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
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
    padding: 14,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'end',
    alignSelf: 'flex-end',
    width: 100,
    justifyContent: 'center',
  },
});