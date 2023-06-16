import { MockProfileData } from 'shared/const/common';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: MockProfileData,
      form: {
        username: '',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data: MockProfileData,
      form: MockProfileData,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '123',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123456',
      }),
    )).toEqual({
      form: {
        username: '123456',
      },
    });
  });

  test('test updateProfile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test updateProfile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: undefined,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(MockProfileData, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data: MockProfileData,
      form: MockProfileData,
    });
  });
});
