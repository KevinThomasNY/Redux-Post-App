import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: TodoState = {
  todos: [],
  selectedTodo: null,
  status: "idle",
  error: null,
};``

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return todos.splice(0, 5);
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = action.payload;
      state.todos.push(newTodo)
    },
    deleteTodo :(state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    getSingleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.selectedTodo = state.todos.find((todo) => todo.id === id) || null;
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const {id, title, userId, completed} = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.userId = userId;
        existingTodo.completed = completed;
      }
    },
    setCompleted: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if(existingTodo){
        existingTodo.completed = !existingTodo.completed;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const selectAllTodos = (state: RootState) => state.todos.todos;
export const selectTodosStatus = (state: RootState) => state.todos.status;
export const {addTodo, deleteTodo, getSingleTodo, editTodo, setCompleted} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
