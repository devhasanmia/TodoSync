import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string,
    title: string,
    description: string,
    isCompleted: boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },
        handleToggle: (state, action: PayloadAction<string>) => {
            const task = state.todos.find((item) => item.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        handleEdit: (state, action: PayloadAction<TTodo>) => {
            const editedTodo = action.payload;
            const existingTodoIndex = state.todos.findIndex(todo => todo.id === editedTodo.id);
            if (existingTodoIndex !== -1) {
                state.todos[existingTodoIndex] = editedTodo;
            }
        },
    }
})

export const { addTodo, removeTodo, handleToggle, handleEdit } = todoSlice.actions

export default todoSlice.reducer;
