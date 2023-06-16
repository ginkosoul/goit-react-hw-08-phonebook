import { Box, Button, Typography } from '@mui/material';
import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: '100%',
    width: '360px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '8px 8px 8px #bebebe, -4px -4px 8px #bebebe',
    padding: '16px',
  },
};

export default function ContactBook() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div style={styles.wrapper}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h5">
          Welcome, {name || 'Guest'}
        </Typography>
        <Button type="submit" variant="outlined" onClick={handleLogOut}>
          LogOut
        </Button>
      </Box>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
