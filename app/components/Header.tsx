import React from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { useTheme } from '../context/useTheme';

const Header = ({showThemeToggle=false}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      <View style={styles.topRow}>
        
        {/* LEFT SIDE */}
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/images/logo_icon-1.png')}
            style={styles.logo}
          />

          <View>
            <Text style={[styles.title, { color: theme.text }]}>
              Quiz Master <Text style={styles.appName}>App</Text>
            </Text>
            <Text style={[styles.subtitle, { color: theme.subText }]}>
              Test your knowledge
            </Text>
          </View>
        </View>

            {/* SWITCH */}
        {
          showThemeToggle && (
          <View style={styles.switchWrapper}>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              thumbColor={isDark ? '#ffffff' : '#f4f4f5'}
              trackColor={{
                false: '#d1d5db',
                true: '#6366f1', 
              }}
            />
          </View>
          )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 14,
    paddingHorizontal: 16,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // clean shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 14,
    marginRight: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  appName: {
    color: '#6366f1',  
  },
  subtitle: {
    fontSize: 15,
    marginTop: 2,
    opacity: 0.7,
  },

  switchWrapper: {
    padding: 10,
    // borderRadius: 10,
    // backgroundColor: 'rgba(99,102,241,0.08)', 
  },
});