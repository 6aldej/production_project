import { MockProfileData } from 'shared/const/common';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

describe('validateProfileData.test', () => {
  test('success thunk', async () => {
    const result = validateProfileData(MockProfileData);

    expect(result).toEqual([]);
  });

  test('incorrect user data', async () => {
    const result = validateProfileData({ ...MockProfileData, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...MockProfileData, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...MockProfileData, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
