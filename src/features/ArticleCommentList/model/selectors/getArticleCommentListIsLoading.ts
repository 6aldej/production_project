import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentListIsLoading = (state: StateSchema) => (
  state?.articleCommentList?.isLoading || false
);
