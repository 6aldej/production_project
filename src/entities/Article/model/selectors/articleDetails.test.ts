import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './articleDetails';

describe('articleDetails.test getArticleDetailsData', () => {
  test('test data', () => {
    const data = {
      id: '1',
      title: 'title',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

describe('articleDetails.test getArticleDetailsIsLoading', () => {
  test('test loading', () => {
    const isLoading = true;
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe('articleDetails.test getArticleDetailsError', () => {
  test('test error', () => {
    const error = 'error message';
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error,
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
