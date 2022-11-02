import { SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from './src/constants'
import styles from './src/styles'

const Layout = (props) => {
    const { component: Component } = props
    return (
        <SafeAreaView style={[styles.container, styles.ph2, styles.bgDark]}>
            <Component {...props} />
        </SafeAreaView>
    )
}

export default Layout
