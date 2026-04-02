import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from './context/useTheme';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { theme } = useTheme();
  const [savedBreakdown, setSavedBreakdown] = useState([]);

useEffect(() => {
  const loadBreakdown = async () => {
    try {
      const json = await AsyncStorage.getItem('@quiz_breakdown');
      if (json != null) {
        setSavedBreakdown(JSON.parse(json));
      }
    } catch (e) {
      console.log('Error loading quiz breakdown', e);
    }
  };

  loadBreakdown();
}, []);

  const breakdown = params.breakdown ? JSON.parse(params.breakdown) : savedBreakdown;
  const score = Number(params.score) || 0;
  const total = Number(params.total) || 0;
  const timeUsed = params.timeUsed;
  const totalSeconds = Number(timeUsed) || 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background }
      ]}
    >
    <Header />
      <Text style={[styles.header, { color: theme.text }]}>
        🎉 YOUR RESULT
      </Text>

      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: theme.text }]}>
          Score: <Text style={styles.bold}>{score}</Text> / {total}
        </Text>

        <View style={[styles.circle, { borderColor: theme.primary }]}>
          <Text style={[styles.percent, { color: theme.primary }]}>
            {percent}%
          </Text>
        </View>
      </View>

      <Text style={[styles.time, { color: theme.text }]}>
        <Ionicons name="timer" size={16} color={theme.text} />{' '}
        Time Used: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </Text>

      <View style={[styles.breakdownBox, { backgroundColor: theme.card }]}>
      <Text style={[styles.breakdownTitle, { color: theme.text }]}>📊 BREAKDOWN:</Text>

      {savedBreakdown.map((item, idx) => (
        <View key={idx} style={{ marginBottom: 12 }}>
          <Text style={{ color: theme.text, fontWeight: 'bold' }}>
            Q{item.q}: {item.question}
          </Text>
          {item.options.map((opt, i) => (
            <Text
              key={i}
              style={{
                color:
                  opt === item.answer
                    ? 'green'
                    : opt === item.selectedAnswer
                    ? 'red'
                    : theme.text,
              }}
            >
              {opt} {opt === item.answer ? '✔️' : opt === item.selectedAnswer ? '❌' : ''}
            </Text>
          ))}
        </View>
      ))}
    </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.card }]}
          onPress={() => router.push('/')}
        >
          <Text style={{ color: theme.primary }}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 24,
  },
  darkContainer: { backgroundColor: '#181c24' },
  header: { fontSize: 28, fontWeight: 'bold', marginTop: 24, color: '#222', textAlign: 'center' },
  darkHeader: { color: '#fff' },
  scoreRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  score: { fontSize: 24, color: '#222' },
  darkScore: { color: '#fff' },
  bold: { fontWeight: 'bold', fontSize: 28 },
  circle: {
    marginLeft: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6f7ff',
  },
  percent: { fontSize: 18, color: '#00bfff', fontWeight: 'bold' },
  time: { fontSize: 16, marginVertical: 4, color: '#555' },
  performance: { fontSize: 16, marginVertical: 4, color: '#ff6600', fontWeight: 'bold' },
  icon: { marginRight: 8 },
  breakdownBox: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    width: '50%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  darkBreakdownBox: { backgroundColor: '#232a36' },
  breakdownTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  breakdownRow: { flexDirection: 'row', flexWrap: 'wrap' },
  breakdownItem: { 
     flexDirection: 'column',
     fontSize: 20,
     marginRight: 16, 
     marginBottom: 8, 
    },
  correct: { color: '#00c853', fontWeight: 'bold' },
  incorrect: { color: '#d32f2f', fontWeight: 'bold' },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#e6f0fa',
    color: '#007aff',
    fontSize: 18,
    textAlign: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  darkButton: { backgroundColor: '#232a36', color: '#00bfff' },
});