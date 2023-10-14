import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
