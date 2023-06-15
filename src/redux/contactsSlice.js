import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContactsThunk, deleteContactsThunk, getContactsThunk } from './thunk';

const STATUS = {
	PENDING: 'pending',
	FULFILLED: 'fulfilled',
	REJECTED: 'rejected',
}
const thunks = [getContactsThunk, createContactsThunk, deleteContactsThunk]

const options = (status) => thunks.map((el) => el[status])

const handlePending = (state) => {
	state.isLoading = true;
  state.error = null;
}

const handleFulfilled = (state) => {
	state.isLoading = false;
}
const handleFulfilledGet = (state, { payload }) => {
	state.items = payload;
}
const handleFulfilledDel = (state, { payload }) => {
	state.items = state.items.filter((el) => el.id !== payload.id)
}
const handleFulfilledCreate = (state, { payload }) => {
	state.items.push(payload)
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload
}
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
		const { PENDING, FULFILLED, REJECTED } = STATUS
		builder
			.addCase(getContactsThunk.fulfilled, handleFulfilledGet)
			.addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
			.addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
			.addMatcher(isAnyOf(...options(PENDING)), handlePending)
			.addMatcher(isAnyOf(...options(FULFILLED)), handleFulfilled)
			.addMatcher(isAnyOf(...options(REJECTED)), handleRejected)
	},
})

export const getContacts = (state) => state.contacts.items

export const contactsReducer = contactsSlice.reducer
