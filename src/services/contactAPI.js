import { default as axios } from 'axios';

// const baseURL = 'https://6486c61fbeba6297278f233c.mockapi.io/v1/';
// const contactbookAPI = axios.create({ baseURL });

export const fetchContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};
