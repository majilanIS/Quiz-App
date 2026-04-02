import React from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { useTheme } from '../context/useTheme';

const Header = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/images/logo_icon.png')}
            style={styles.logo}
          />

          <View>
            <Text style={[styles.title, { color: theme.text }]}>
              Quiz Master
            </Text>
            <Text style={[styles.subtitle, { color: theme.subText }]}>
              Test your knowledge
            </Text>
          </View>
        </View>

        {/* THEME SWITCH */}
        <View style={styles.switchContainer}>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            thumbColor={isDark ? '#fff' : '#f4f3f4'}
            trackColor={{ false: '#ccc', true: theme.primary }}
            style={styles.switch}
          />
        </View>
      </View>

      {/* DIVIDER */}
      <View
        style={[
          styles.divider,
          { backgroundColor: isDark ? '#2a2a2a' : '#e5e7eb' },
        ]}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  logo: {
    width: 40,
    height: 60,
    borderRadius: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 16,
    marginTop: 2,
    opacity: 0.7,
  },

  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    height: 30,
    width: 50,
  },

  divider: {
    marginTop: 12,
    height: 1,
    width: '100%',
    borderRadius: 10,
  },
});