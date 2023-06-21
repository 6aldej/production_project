import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentListError = (state: StateSchema) => (
  state?.articleCommentList?.error
);
