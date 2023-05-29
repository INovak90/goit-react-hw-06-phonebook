import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import InitialContact from '../../src/components/InitialContacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: InitialContact,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.items.find(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert(`${action.payload.name} is already in contacts`);
        }
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContacts } = contactsSlice.actions;
