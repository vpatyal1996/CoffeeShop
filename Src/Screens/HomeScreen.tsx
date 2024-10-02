import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../Store/store'


const HomeScreen = () => {
  const coffeeList= useStore((state:any)=> state.CoffeeList)
  console.log(coffeeList)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})