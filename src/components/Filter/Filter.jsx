import { addFilter, getFilter } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch(getFilter);

  const onChange = e => {
    dispatch(addFilter(e.target.value.trim()));
  };
  return (
    <TextField
      margin="normal"
      fullWidth
      name="filter"
      size="small"
      type="text"
      onChange={onChange}
    />
  );
}
