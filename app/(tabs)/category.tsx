import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DestinationCard from "@/components/DestinationCard";
import listingData from "@/data/destinations.json";

const CategoryPage = () => {
  const renderItem = ({ item }) => <DestinationCard destination={item} />

  return (
    <View style={styles.container}>
      <FlatList
        data={listingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default CategoryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
