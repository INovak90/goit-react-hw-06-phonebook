import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactSlice';
import { contactsFilterReducer } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['items'],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilterReducer,
});
const PersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
