import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  console.log(state);
  return state.contacts.items;
};
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, valueFilter) => {
    console.log(contacts);
    if (valueFilter !== null || valueFilter !== '') {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(valueFilter.toLowerCase().trim())
      );
    }
  }
);
