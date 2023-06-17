import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={3}
      sx={{
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Button
        type="button"
        onClick={() => {
          navigate('/register');
        }}
        fullWidth
        variant="outlined"
      >
        Register
      </Button>
      <Button
        type="button"
        onClick={() => {
          navigate('/login');
        }}
        fullWidth
        variant="contained"
      >
        Login
      </Button>
    </Paper>
  );
}
