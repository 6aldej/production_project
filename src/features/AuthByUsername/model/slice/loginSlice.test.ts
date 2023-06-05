import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'username' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('userLogin123'),
    )).toBe({ username: 'userLogin123' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('password123'),
    )).toBe({ password: 'password123' });
  });
});
