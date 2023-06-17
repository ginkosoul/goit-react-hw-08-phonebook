import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactsSlice';
import { createContactsThunk } from 'redux/contacts/thunk';
import { Button, TextField } from '@mui/material';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: userData => {
      if (contacts.find(e => e.name === userData.name)) {
        alert('Already in the list');
        return;
      }
      dispatch(createContactsThunk(userData));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          size="small"
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          size="small"
          fullWidth
          id="number"
          name="number"
          label="number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button
          color="primary"
          size="small"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isLoading}
          sx={{ mt: 3, mb: 2 }}
        >
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
}
