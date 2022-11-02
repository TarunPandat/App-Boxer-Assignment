import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes/Todo.Action.Types"

const initialState = []

export default function Todo(state = initialState, {type, payload}) {
    switch(type) {
        case CREATE_TODO:
            return [...state, payload]
        case DELETE_TODO:
            let s = [...state]
            s.splice(payload, 1)
            return s
        case EDIT_TODO:
            let s2 = [...state]
            s2[payload.index] = payload.todo
            return s2
        default:
            return state
    }
}