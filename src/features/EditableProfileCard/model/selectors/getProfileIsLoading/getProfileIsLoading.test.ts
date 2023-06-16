import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('test data', () => {
    const loading = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: loading,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(loading);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
