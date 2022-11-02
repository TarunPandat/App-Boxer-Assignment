import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import { images } from '../../../constants'

const CreateTodo = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.row, styles.justifyContentSpaceBetween]}>
        <Text style={[styles.title]}>CreateTodo</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateTodo