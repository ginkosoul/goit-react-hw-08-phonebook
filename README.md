# Phonebook

Refactoring application using redux

## Contact book

Perform refactoring of the Contact Book application code. Remove the code
responsible for storing and reading contacts from the local storage, and add
communication with the backend for storing contacts.

## State Form

Add the load and error indicator handling to the Redux state. To do this, change
the state form.

`{ contacts: { items: [], isLoading: false, error: null }, filter: "" }`

### Operations

Use createAsyncThunk to declare asynchronous action generators and make HTTP
requests. Do the processing of the actions and change data in Redux state with
createSlice.

Declare the following operations:

`fetchContacts` - get an array of contacts (GET method) by GET request. The
basic type of action `"contacts/fetchAll"`. `addContact` - add contact (POST
method). Basic type of action `"contacts/addContact"`. `deleteContact` - deletes
a contact (DELETE method). Basic type of action `"contacts/deleteContact"`.
