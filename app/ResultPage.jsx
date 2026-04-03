import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from './context/useTheme';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ResultPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { theme } = useTheme();
  const [savedBreakdown, setSavedBreakdown] = useState([]);

  // Load saved breakdown from AsyncStorage
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

  // Determine the breakdown to display
  let breakdown = savedBreakdown;
  if (params.breakdown) {
    try {
      breakdown =
        typeof params.breakdown === 'string'
          ? JSON.parse(params.breakdown)
          : Array.isArray(params.breakdown)
          ? params.breakdown
          : savedBreakdown;
    } catch {
      breakdown = savedBreakdown;
    }
  }

  const score = Number(params.score) || 0;
  const total = Number(params.total) || 0;
  const timeUsed = Number(params.timeUsed) || 0;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />

      <Text style={[styles.header, { color: theme.text }]}>
        🎉 YOUR RESULT
      </Text>

      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: theme.text }]}>
          Score: <Text style={styles.bold}>{score}</Text> / {total}
        </Text>

        <AnimatedCircularProgress
          size={70}
          width={6}
          fill={percent}
          tintColor={theme.primary}
          backgroundColor={theme.border}
          rotation={0}
          lineCap="round"
        >
          {() => (
            <Text style={[styles.percent, { color: theme.primary }]}>
              {percent}%
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>

      <Text style={[styles.time, { color: theme.text }]}>
        <Ionicons name="timer" size={16} color={theme.text} />{' '}
        Time Used: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </Text>

      <ScrollView
        contentContainerStyle={[
          styles.breakdownBox,
          {
            backgroundColor: theme.card,
          },
        ]}
        showsVerticalScrollIndicator={true} 
        indicatorStyle='red'
      >
        <Text style={[styles.breakdownTitle, { color: theme.text }]}>
          📊 BREAKDOWN:
        </Text>

        {Array.isArray(breakdown) && breakdown.length > 0 ? (
          breakdown.map((item, idx) => (
            <View key={item.q || idx} style={{ marginBottom: 12 }}>
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
                  {opt}{' '}
                  {opt === item.answer
                    ? '✔️'
                    : opt === item.selectedAnswer
                    ? '❌'
                    : ''}
                </Text>
              ))}
            </View>
          ))
        ) : (
          <Text style={{ color: theme.text }}>
            No breakdown available
          </Text>
        )}
      </ScrollView>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.card }]}
          onPress={() => router.replace('/')} // ✅ better navigation
        >
          <Text style={{ color: theme.text }}>
            Restart Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ fixed (was flexGrow)
    alignItems: 'center',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 18,
    textAlign: 'center',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 16, 
  },
  score: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  percent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 10,
  },
  breakdownBox: {
    flexDirection: 'column',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000', // ✅ keep consistent shadow
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    padding: 14,
    borderRadius: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
  },
});