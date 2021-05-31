import React from 'react'
import {View, StyleSheet} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import CarsList from './components/CarsList'

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return(
   <View style={styles.container}>
      <CarsList />
      <StatusBar style='auto'/>
   </View>
  )
}

export default App