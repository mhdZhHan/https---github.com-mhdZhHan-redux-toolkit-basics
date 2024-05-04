import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: 1,
        task: "Hello world"
    }]
}

export const todoSlice = createSlice({
    name: "todo", // name of the state (slice)
    initialState, // the actual state
    /**
     * reducers are used to controlling the states
     * add, update, delete
     */
    reducers: {
        addTodo: (state, action) => {
            // creating todo object with `id` and 'task` name
            const todo = {
                id: nanoid(),
                task: action.payload,
            }

            // after created `todo`. add it into the `todo's` array (above initialized)
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            // removing todo based on the id from the action.payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
