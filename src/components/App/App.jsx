import { ContactList, Filter, ContactForm } from 'components';
import css from '../App/App.module.css';

export default function App() {
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
