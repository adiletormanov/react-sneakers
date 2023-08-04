import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: (''),
  surname: (''),
  email: (''),
  pass: (''),
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    },
		setSurname(state, action) {
      state.surname = action.payload.surname;
    },
		setEmail(state, action) {
      state.email = action.payload.email;
    },
		setPass(state, action) {
      state.pass = action.payload.pass;
    },
  },
});

export const { setName, setSurname, setEmail, setPass } = formSlice.actions;

export default formSlice.reducer;
