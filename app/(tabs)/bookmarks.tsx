import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Bookmarks Added</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
  }
})