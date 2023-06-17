import { Box, Button, Paper, Typography } from '@mui/material';
import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export default function ContactBook() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography component="h4" variant="h5">
          {name || 'Guest'}
        </Typography>
        <Button type="submit" variant="outlined" onClick={handleLogOut}>
          LogOut
        </Button>
      </Box>
      <Typography component="h5">Phonebook</Typography>
      <ContactForm />
      <Typography component="h5">Contacts</Typography>
      <Filter />
      <ContactList />
    </Paper>
  );
}
