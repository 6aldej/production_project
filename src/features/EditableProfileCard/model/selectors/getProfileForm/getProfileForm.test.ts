import { StateSchema } from 'app/providers/StoreProvider';
import { MockProfileData } from 'shared/const/common';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('test data', () => {
    const form = MockProfileData;

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
