import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Orange */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subHeader}>Login</Text>
        
        <Text style={styles.welcomeText}>Welcome to the app</Text>
        <Text style={styles.instructionText}>Login to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation Simulation */}
      <View style={styles.footer}>
        <Text style={[styles.navItem, styles.activeNav]}>Login</Text>
        <Text style={styles.navItem}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333' },
  header: { backgroundColor: '#E5A07F', padding: 15, alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  content: { flex: 1, padding: 20, alignItems: 'center' },
  subHeader: { color: '#000', backgroundColor: '#FFF', width: '100%', textAlign: 'center', padding: 5, marginBottom: 30 },
  welcomeText: { color: '#FFF', fontSize: 22, marginBottom: 10 },
  instructionText: { color: '#AAA', fontSize: 16, marginBottom: 30 },
  input: { backgroundColor: '#CCC', width: '100%', height: 45, marginBottom: 15, paddingHorizontal: 15, borderRadius: 2 },
  loginButton: { backgroundColor: '#E5A07F', width: '70%', padding: 15, borderRadius: 25, marginTop: 10 },
  loginButtonText: { textAlign: 'center', fontSize: 18, color: '#000' },
  footer: { flexDirection: 'row', height: 60, backgroundColor: '#F8F8F8', borderTopWidth: 1, borderColor: '#DDD' },
  navItem: { flex: 1, textAlign: 'center', paddingTop: 15, fontSize: 16, color: '#888' },
  activeNav: { color: '#000', fontWeight: 'bold', borderTopWidth: 2, borderTopColor: '#000' },
});