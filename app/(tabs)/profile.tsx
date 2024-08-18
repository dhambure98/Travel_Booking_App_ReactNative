import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ProfilePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: 'https://img.freepik.com/premium-photo/profile-closeup-handsome-bearded-man-30s-with-tied-hair-white-t-shirt-smiling-while-resting-green-park_171337-37806.jpg'}}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Mike Anderson</Text>
      <Text style={styles.bio}>
        Human Resource Manager at Zachary Daniels UK
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailText}>Mike50@gmail.com</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Phone:</Text>
        <Text style={styles.detailText}>+94 76 563 672</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Address:</Text>
        <Text style={styles.detailText}>123 Main St, Mount Lavinia, Sri Lanka</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>LinkedIn:</Text>
        <Text style={styles.detailText}>linkedin.com/in/Mike50</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>GitHub:</Text>
        <Text style={styles.detailText}>github.com/Mike50</Text>
      </View>
    </ScrollView>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  detailText: {
    color: '#666',
  }
})
