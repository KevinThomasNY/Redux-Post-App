import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [
    { id: 1, title: "First Post!", content: "Hello!" },
    { id: 2, title: "Second Post", content: "More text" },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action) => {
      const id = action.payload;
      state.posts = state.posts.filter(post => post.id !== id);
    }    
  },
});

export const {createPost, deletePost} = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
