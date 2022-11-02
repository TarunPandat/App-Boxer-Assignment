import { createAction } from "@reduxjs/toolkit"
import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes/Todo.Action.Types"

export const createTodo = createAction(CREATE_TODO)
export const deleteTodo = createAction(DELETE_TODO)
export const editTodo = createAction(EDIT_TODO)