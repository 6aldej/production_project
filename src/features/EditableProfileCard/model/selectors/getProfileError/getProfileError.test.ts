import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('test data', () => {
    const errorText = 'test error text';

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: errorText,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(errorText);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
