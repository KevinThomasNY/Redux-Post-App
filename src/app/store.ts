import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import { todosReducer } from "../features/todos/todosSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        todos: todosReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
