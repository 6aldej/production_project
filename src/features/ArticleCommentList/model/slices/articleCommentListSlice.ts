import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleCommentListSchema } from '../types/articleCommentListSchema';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleCommentList || commentsAdapter.getInitialState(),
);

const articleCommentListSlice = createSlice({
  name: 'articleCommentList',
  initialState: commentsAdapter.getInitialState<ArticleCommentListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        { payload }: PayloadAction<any>,
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { actions: articleCommentListActions } = articleCommentListSlice;
export const { reducer: articleCommentListReducer } = articleCommentListSlice;
