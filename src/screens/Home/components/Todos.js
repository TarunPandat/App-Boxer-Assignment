import {
    View,
    Text,
    FlatList,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
} from 'react-native'
import React from 'react'
import styles from '../../../styles'
import CircleBtn from './CircleBtn'

const Separator = () => <View style={[styles.hr, styles.mv4]} />

const Todos = ({ todos, delTodo, edTodo, addTodo }) => {
    const [activeIndex, setActiveIndex] = React.useState(null)

    const onCircleDelTodo = (index) => {
        Alert.alert(
            'Delete Todo',
            'Are you sure to delete this todo from list',
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        setActiveIndex(index)
                        setTimeout(() => {
                            setActiveIndex(null)
                            if (activeIndex >= 0) delTodo(index)
                        }, 2000)
                    },
                },
            ]
        )
    }

    const Todo = ({ item, index }) => {
        return (
            <View style={[styles.row, styles.alignItemsCenter]}>
                <CircleBtn
                    onPress={() => onCircleDelTodo(index)}
                    active={activeIndex === index}
                />
                <TextInput
                    autoFocus={todos.length - 1 === index ? true : false}
                    style={[styles.todo, styles.ml2, { width: '90%' }]}
                    value={item}
                    onChangeText={(todo) => edTodo(index, todo)}
                    onBlur={() => !item && delTodo(index)}
                    multiline
                />
            </View>
        )
    }

    const addTodoByTouch = () => {
        let anyBlank = todos.some((i) => !i)
        if (!anyBlank) {
            addTodo()
        }
    }

    return (
        <View style={[styles.container, styles.mh4, styles.mt2]}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={addTodoByTouch}
                style={[styles.container, { height: '100%' }]}
            >
                <FlatList
                    style={[styles.container]}
                    data={todos}
                    renderItem={Todo}
                    ItemSeparatorComponent={Separator}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Todos
