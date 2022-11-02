import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'

const CircleBtn = ({ active, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.circleBorder]}>
            {active && <View style={[styles.circle]} />}
        </TouchableOpacity>
    )
}

export default CircleBtn

const styles = StyleSheet.create({
    circleBorder: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.white,
        borderWidth: 0.5,
        borderRadius: 25 / 2,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: colors.active,
    },
})
