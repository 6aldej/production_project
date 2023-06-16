import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
  test('test data', () => {
    const validateErrors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
