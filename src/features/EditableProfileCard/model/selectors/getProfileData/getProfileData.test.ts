import { StateSchema } from 'app/providers/StoreProvider';
import { MockProfileData } from 'shared/const/common';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('test data', () => {
    const data = MockProfileData;

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
