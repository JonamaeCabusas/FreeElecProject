import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  // Task 2: Code useState task checkbox (State management para sa 4x4 matrix sa checkboxes)
  const [columns, setColumns] = useState([
    [true, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);

  const [checkedActivities, setCheckedActivities] = useState<string[]>([]);

  // Task 1: Label list sa mga activities kada column
  const taskLabels = [
    ['Setup Router Pages', 'Code useState task checkbox', 'Pass Member data using Route Params', 'Check all functionality'],
    ['Style Progress Counter Box', 'Design Activities Container(index bottom part)', 'Style Member Task Boxes', 'Design Task Checkbox Buttons'],
    ['Design Profile Page Header ', 'Arrange member picture and text details side-by-side', 'Build Two-Column Grid Boxes ', 'Format email banner and navigation back button'],
    ['Design Profiles Container', 'Design photo placeholder boxes', 'Style Member Name Buttons', 'Align Top Section Spacing'],
  ];

  // Tagalog: Subaybayan sa console kung anong mga tasks ang active/naka-check
  useEffect(() => {
    console.log('[ACTIVE CHECKED ACTIVITIES]:', checkedActivities);
  }, [checkedActivities]);

  // Tagalog: Logic para sa pag-toggle o pag-check/uncheck ng mga checkboxes
  const toggleCheckbox = (colIdx: number, rowIdx: number) => {
    const taskName = taskLabels[colIdx][rowIdx];
    const isCurrentlyChecked = columns[colIdx][rowIdx];

    const updated = columns.map((col, cI) =>
      col.map((isChecked, rI) => (cI === colIdx && rI === rowIdx ? !isChecked : isChecked))
    );
    setColumns(updated);

    if (!isCurrentlyChecked) {
      setCheckedActivities((prev) => [...prev, taskName]);
    } else {
      setCheckedActivities((prev) => prev.filter((item) => item !== taskName));
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.mainScroll} contentContainerStyle={styles.mainContent}>
        {/* Title Header Section */}
        <View style={styles.mainTitleBox}>
          <Text style={styles.mainTitleText}>CHAOS CREW PROJECT ACTIVITIES</Text>
        </View>

        {/* PROFILES CONTAINER SECTION */}
        <View style={styles.profilesSection}>
          <View style={styles.sectionHeaderBadge}>
            <Text style={styles.sectionHeaderTitle}>PROFILES</Text>
          </View>

          <View style={styles.memberRow}>
            {/* Task 3: Pass Member data using Route Params (Jona Profile Card & Data Routing) */}
            <View style={styles.memberCard}>
              <Image
                source={require('../../assets/images/jona.jpg')}
                style={styles.image}
                accessibilityLabel="Jona Mae Cabusas"
              />
              <Button
                title="JONA MAE CABUSAS"
                color="#d94f9c"
                onPress={() =>
                  router.push({
                    pathname: '/profile',
                    params: {
                      image: 'jona',
                      name: 'Jona Mae Cabusas',
                      role: 'Leader',
                      bio: 'Leader kunuhay nga nagapanguna sa Chaos Crew project.😁',
                      love: 'Kdrama binge watching and singing',
                      fun: 'My ultimate rest day formula involves a fresh cup of coffee, a good K-drama binge, and tuned-in playlists featuring BTS and ENHYPEN',
                      email: 'jona.mae.cabusas@chaoscrew.com',
                    },
                  })
                }
              />
            </View>
            
{/* STEVEN ARMECIN PROFILE CARD & DATA ROUTING */}
<View style={styles.memberCard}>
  {/* Image component gamit ang profile image ni Steven */}
  <Image
    source={require('../../assets/images/steven.jpg')}
    style={styles.image}
    accessibilityLabel="Steven Lee Dave Armecin"
  />
  {/* Button para sa navigation papunta sa profile detail page */}
  <Button
    title="STEVEN ARMECIN"
    color="#d94f9c"
    onPress={() =>
      router.push({
        pathname: '/profile',
        params: {
          image: 'steven',
          name: 'Steven Lee Dave Armecin',
          role: 'Member',
          bio: 'A creative problem-solver from Catmon who loves turning simple ideas into real things that help people.',
          love: 'Creating Dances/Dancing, Playing Pets, Adventures,Riding and Everything that makes me sweat',
          fun: 'I can think both like an artist and a coder — rare combo.',
          email: 'steven.lee.dave.armecin@chaoscrew.com',
        },
      })
    }
  />
</View>

{/* CLINT BARRIGA PROFILE CARD & DATA ROUTING */}
<View style={styles.memberCard}>
  {/* Image photo placeholder display */}
  <Image
    source={require('../../assets/images/clint.jpg')}
    style={styles.image}
    accessibilityLabel="Clint Harold Barriga"
  />
  {/* Member name button setup with custom routing parameters */}
  <Button
    title="CLINT BARRIGA"
    color="#d94f9c"
    onPress={() =>
      router.push({
        pathname: '/profile',
        params: {
          image: 'clint',
          name: 'Clint Harold Barriga',
          role: 'Member',
          bio: 'Passionate about coding and contributing to the Chaos Crew project.',
          love: 'React Native',
          fun: 'Late night coding',
          email: 'clint.harold.barriga@chaoscrew.com',
        },
      })
    }
  />
</View>
          </View>
        </View>

        {/* ACTIVITIES GRID CONTAINER SECTION */}
        <View style={styles.activitiesSection}>
          <View style={styles.sectionHeaderBadge}>
            <Text style={styles.sectionHeaderTitle}>ACTIVITIES</Text>
          </View>

          <View style={styles.activitiesRow}>
            {columns.map((column, colIdx) => {
              const checkedCount = column.filter(Boolean).length;
              return (
                <View key={colIdx} style={styles.activityColumn}>
                  {/* Progress counter box (0/4 score display) */}
                  <View style={styles.counterBox}>
                    <Text style={styles.counterText}>
                      {checkedCount}/{column.length}
                    </Text>
                  </View>
                  {/* Listahan ng Task Checkboxes */}
                  <View style={styles.taskList}>
                    {column.map((isChecked, rowIdx) => (
                      <View key={rowIdx} style={styles.taskRow}>
                        <Pressable
                          style={[styles.checkboxBox, isChecked && styles.checkboxBoxChecked]}
                          onPress={() => toggleCheckbox(colIdx, rowIdx)}
                        >
                          <Text style={styles.checkmark}>{isChecked ? '✓' : ''}</Text>
                        </Pressable>
                        <Text style={styles.taskLabel}>{taskLabels[colIdx][rowIdx]}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Bisaya: Global glassmorphism aesthetic styling
const GLASS_EDGE = 'rgba(255, 255, 255, 0.14)';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0a0d14' },
  mainScroll: { flex: 1, width: '100%' },
  mainContent: { flexGrow: 1, paddingVertical: 24, paddingHorizontal: 24, justifyContent: 'space-evenly', alignItems: 'stretch' },
  mainTitleBox: { alignSelf: 'center', backgroundColor: 'rgba(52, 211, 153, 0.14)', borderRadius: 999, borderWidth: 1, borderColor: 'rgba(52, 211, 153, 0.55)', paddingHorizontal: 22, paddingVertical: 10, marginTop: 4 },
  mainTitleText: { fontSize: 16, fontWeight: '800', letterSpacing: 1, color: '#a7f3d0', textAlign: 'center' },
  profilesSection: { width: '100%', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.25)', alignItems: 'center', paddingTop: 36, paddingBottom: 20, position: 'relative' },
  sectionHeaderBadge: { position: 'absolute', top: -16, backgroundColor: '#da4540', borderRadius: 999, paddingHorizontal: 50, paddingVertical: 7, borderWidth: 2, borderColor: '#0a0d14', zIndex: 2 },
  sectionHeaderTitle: { color: '#fff', fontWeight: '800', fontSize: 13, letterSpacing: 1.5 },
  memberRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%', gap: 14, paddingHorizontal: 14 },
  memberCard: { flexGrow: 1, flexBasis: 170, maxWidth: 200, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.07)', borderRadius: 20, borderWidth: 1, borderColor: GLASS_EDGE, paddingTop: 12, paddingBottom: 10, paddingHorizontal: 8 },
  image: { width: 130, height: 140, backgroundColor: 'rgba(255, 255, 255, 0.08)', marginBottom: 10, borderRadius: 16, borderWidth: 2, borderColor: 'rgba(255, 255, 255, 0.22)' },
  activitiesSection: { width: '100%', backgroundColor: 'rgba(251, 146, 60, 0.08)', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(251, 146, 60, 0.25)', alignItems: 'center', paddingTop: 36, paddingBottom: 20, paddingHorizontal: 10, position: 'relative' },
  activitiesRow: { flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', gap: 6 },
  activityColumn: { flex: 1, flexBasis: 0, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 16, borderWidth: 1, borderColor: GLASS_EDGE, paddingVertical: 12, paddingHorizontal: 4 },
  counterBox: { backgroundColor: 'rgba(52, 211, 153, 0.16)', borderRadius: 999, borderWidth: 1, borderColor: 'rgba(52, 211, 153, 0.5)', paddingHorizontal: 10, paddingVertical: 3, marginBottom: 12 },
  counterText: { fontSize: 12, fontWeight: '800', color: '#6ee7b7' },
  taskList: { gap: 8, alignItems: 'flex-start' },
  taskRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  checkboxBox: { width: 20, height: 20, borderWidth: 1.5, borderColor: 'rgba(255, 255, 255, 0.45)', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 7, justifyContent: 'center', alignItems: 'center' },
  checkboxBoxChecked: { backgroundColor: '#34d399', borderColor: '#34d399' },
  checkmark: { fontSize: 12, fontWeight: 'bold', color: '#06281b' },
  taskLabel: { fontSize: 11, fontWeight: '600', color: '#e5e7eb' },
});