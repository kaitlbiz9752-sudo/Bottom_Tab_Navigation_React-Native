import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Orange */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Hello there</Text>
        
        <Text style={styles.descriptionText}>
          This app provides easy access to main screens of the application for a direct, user-friendly experience.
        </Text>
        
        <Text style={styles.exploreText}>Feel free to explore!</Text>
      </View>

      {/* Footer Navigation Simulation */}
      <View style={styles.footer}>
        <Text style={styles.navItem}>Login</Text>
        <Text style={[styles.navItem, styles.activeNav]}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333' },
  header: { backgroundColor: '#E5A07F', padding: 15, alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  content: { flex: 1, padding: 40, justifyContent: 'center', alignItems: 'center' },
  welcomeTitle: { color: '#FFF', fontSize: 28, marginBottom: 40 },
  descriptionText: { color: '#DDD', fontSize: 18, textAlign: 'center', lineHeight: 28, marginBottom: 30 },
  exploreText: { color: '#DDD', fontSize: 18, textAlign: 'center' },
  footer: { flexDirection: 'row', height: 60, backgroundColor: '#F8F8F8' },
  navItem: { flex: 1, textAlign: 'center', paddingTop: 15, fontSize: 16, color: '#888' },
  activeNav: { color: '#000', fontWeight: 'bold', borderTopWidth: 2, borderTopColor: '#000' },
});