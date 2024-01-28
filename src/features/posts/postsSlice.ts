import { createSlice } from "@reduxjs/toolkit";

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
    
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
