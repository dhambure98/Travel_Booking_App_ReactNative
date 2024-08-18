import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DestinationCard = ({ destination }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: destination.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{destination.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{destination.description}</Text>
        <View style={styles.details}>
          <Text style={styles.rating}>Rating: {destination.rating}</Text>
          <Text style={styles.price}>${destination.price} / Night</Text>
          <Text style={styles.location}>Location: {destination.location}</Text>
        </View>
      </View>
    </View>
  )
}

export default DestinationCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
  },
  rating: {
    color: '#333',
  },
  price: {
    color: '#333',
  },
  location: {
    color: '#333',
  }
})
