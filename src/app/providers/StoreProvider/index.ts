import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  createReduxStore,
  AppDispatch,
};
