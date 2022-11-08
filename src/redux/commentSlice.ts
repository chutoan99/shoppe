import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // Comments
    fetchCommentsStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchCommentsFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailed } = commentsSlice.actions;
export default commentsSlice.reducer;
