import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

// Object map para sa dynamic image loading base sa dynamic params
const profileImages = {
  jona: require('../assets/images/jona.jpg'),
  steven: require('../assets/images/steven.jpg'),
  cheeny: require('../assets/images/cheeny.jpg'),
  clint: require('../assets/images/clint.jpg'),
};

const GLASS_FILL = 'rgba(255, 255, 255, 0.05)';
const GLASS_EDGE = 'rgba(255, 255, 255, 0.14)';

export default function ProfilesScreen() {
  // Direct reading ng data gikan sa router parameters
  const { name, role, bio, love, fun, email, image } = useLocalSearchParams();

  return (
    <View style={styles.screen}>
      <View style={styles.window}>
        {/* Task 1: Design Profile Page Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>MEMBER PROFILE</Text>
        </View>

        <View style={styles.content}>
          {/* Tagalog: Role badge container */}
          <View style={styles.memberSummary}>
            <Text style={styles.summaryText}>Role: {role}</Text>
          </View>

          {/* Task 2: Arrange member picture and text details side-by-side (flexDirection: 'row') */}
          <View style={styles.memberDetails}>
            <View style={styles.avatar}>
              <Image
                source={profileImages[(Array.isArray(image) ? image[0] : image) as keyof typeof profileImages]}
                style={styles.avatarImage}
                resizeMode="cover"
                accessibilityLabel={`${name} profile photo`}
              />
            </View>

            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{name}</Text>
              <Text style={styles.bio}>{bio}</Text>
            </View>
          </View>

          {/* Task 3: Build Two-Column Grid Boxes (Things I Love & Fun Facts) */}
          <View style={styles.infoColumns}>
            <View style={styles.infoCard}>
              <View style={styles.lovesHeader}>
                <Text style={styles.infoHeaderText}>THINGS I LOVE</Text>
              </View>
              <View style={styles.infoCardContent}>
                <Text style={styles.infoText}>❤️ {love}</Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.factsHeader}>
                <Text style={styles.infoHeaderText}>FUN FACTS</Text>
              </View>
              <View style={styles.infoCardContent}>
                <Text style={styles.infoText}>✦ {fun}</Text>
              </View>
            </View>
          </View>

          {/* Task 4: Format email banner and navigation back button */}
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>CONNECT WITH ME</Text>
            <Text style={styles.contactText}>📩 {email}</Text>
          </View>

          {/* Back button para makabalik sa index screen */}
          <Button title="Back to Dashboard" color="#d94f9c" onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0a0d14', justifyContent: 'center', alignItems: 'center', padding: 20 },
  window: { width: '95%', maxWidth: 950, backgroundColor: GLASS_FILL, borderRadius: 28, borderWidth: 1, borderColor: GLASS_EDGE, padding: 24 },
  header: { backgroundColor: 'rgba(217, 79, 156, 0.14)', borderRadius: 999, borderWidth: 1, borderColor: 'rgba(217, 79, 156, 0.55)', paddingHorizontal: 22, paddingVertical: 10, alignSelf: 'center', marginBottom: 20 },
  headerText: { fontSize: 16, fontWeight: '800', letterSpacing: 1.5, color: '#f472b6', textAlign: 'center' },
  content: { gap: 18 },
  memberSummary: { backgroundColor: 'rgba(56, 189, 248, 0.12)', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.3)', alignSelf: 'flex-start' },
  summaryText: { color: '#38bdf8', fontWeight: '800', fontSize: 14, letterSpacing: 0.5 },
  memberDetails: { flexDirection: 'row', gap: 20, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: 18, borderRadius: 20, borderWidth: 1, borderColor: GLASS_EDGE },
  avatar: { width: 130, height: 140, borderRadius: 18, borderWidth: 2, borderColor: 'rgba(255, 255, 255, 0.22)', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.08)' },
  avatarImage: { width: '100%', height: '100%' },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 22, fontWeight: '900', color: '#f472b6', marginBottom: 10, letterSpacing: 0.5 },
  bio: { fontSize: 14, color: '#e5e7eb', lineHeight: 22, fontWeight: '500' },
  infoColumns: { flexDirection: 'row', gap: 14 },
  infoCard: { flex: 1, borderWidth: 1, borderColor: 'rgba(251, 146, 60, 0.3)', backgroundColor: 'rgba(251, 146, 60, 0.08)', borderRadius: 16, overflow: 'hidden' },
  lovesHeader: { backgroundColor: 'rgba(217, 79, 156, 0.25)', paddingVertical: 8, paddingHorizontal: 12, borderBottomWidth: 1, borderColor: 'rgba(217, 79, 156, 0.4)' },
  factsHeader: { backgroundColor: 'rgba(168, 85, 247, 0.25)', paddingVertical: 8, paddingHorizontal: 12, borderBottomWidth: 1, borderColor: 'rgba(168, 85, 247, 0.4)' },
  infoHeaderText: { fontSize: 12, fontWeight: '800', color: '#f3e8ff', letterSpacing: 1 },
  infoCardContent: { padding: 12, gap: 4 },
  infoText: { fontSize: 13, fontWeight: '600', color: '#e5e7eb' },
  contactCard: { backgroundColor: 'rgba(52, 211, 153, 0.08)', borderWidth: 1, borderColor: 'rgba(52, 211, 153, 0.3)', borderRadius: 16, padding: 14 },
  contactTitle: { fontSize: 12, fontWeight: '800', color: '#6ee7b7', marginBottom: 4, letterSpacing: 1 },
  contactText: { fontSize: 13, fontWeight: '600', color: '#e5e7eb' },
});