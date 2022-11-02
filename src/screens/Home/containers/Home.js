import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Todos from '../components/Todos'
import { images } from '../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import {
    createTodo,
    deleteTodo,
    editTodo,
} from '../../../redux/actions/Todo.Actions'

const Home = () => {
    const { Todo } = useSelector((state) => state)
    const dispatch = useDispatch()

    const delTodo = (index) => {
        dispatch(deleteTodo(index))
    }

    const edTodo = (index, todo) => {
        dispatch(editTodo({ index, todo }))
        console.log({ index, todo })
    }

    const addTodo = () => {
        dispatch(createTodo(''))
    }

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.justifyContentSpaceBetween,
                    styles.row,
                    styles.alignItemsCenter,
                ]}
            >
                <Text style={styles.title}>Todo List</Text>
                <TouchableOpacity onPress={addTodo}>
                    <Image
                        source={images.plus}
                        style={[styles.icon, styles.mr2]}
                    />
                </TouchableOpacity>
            </View>
            <Todos todos={Todo} delTodo={delTodo} edTodo={edTodo} addTodo={addTodo} />
        </View>
    )
}

export default Home
