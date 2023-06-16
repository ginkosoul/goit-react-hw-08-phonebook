import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import css from '../Contacts/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactsSlice';
import { createContactsThunk } from 'redux/contacts/thunk';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const SignupSchema = Yup.object().shape({
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

  const handleSubmit = value => {
    if (contacts.find(e => e.name === value.name)) {
      alert('Already in the list');
      return;
    }
    const newElement = { ...value };
    console.log(value);
    dispatch(createContactsThunk(newElement));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <Field className={css.input} name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Field className={css.input} name="number" />
          {errors.number && touched.number ? <div>{errors.number}</div> : null}
          <button className={css.btn} type="submit" disabled={isLoading}>
            add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
