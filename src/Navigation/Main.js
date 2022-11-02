import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Layout from '../../Layout'
import { Home } from '../screens/Home'
import Routes, { RouteName } from './route.config'

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name={RouteName.Home} options={Routes.Home.options} >
            {props => <Layout component={Routes.Home.component} {...props} />}
        </Stack.Screen>
        <Stack.Screen name={RouteName.CreateTodo} >
            {props => <Layout component={Routes.CreateTodo.component} {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default Main