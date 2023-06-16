import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '400px',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link to="/register">
        <Button type="button" fullWidth variant="outlined">
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button type="button" fullWidth variant="contained">
          Login
        </Button>
      </Link>
    </Box>
  );
}
