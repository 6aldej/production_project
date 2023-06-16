import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { MockProfileData } from 'shared/const/common';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

describe('updateProfileData.test', () => {
  test('success thunk', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: MockProfileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: MockProfileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(MockProfileData);
  });

  test('error thunk', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: MockProfileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...MockProfileData,
          first: '',
          lastname: '',
        },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
