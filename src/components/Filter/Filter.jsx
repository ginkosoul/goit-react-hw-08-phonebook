import { addFilter, getFilter } from 'redux/contacts/filterSlice';
import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch(getFilter);

  const onChange = e => {
    dispatch(addFilter(e.target.value.trim()));
  };
  return <input className={css.input} type="text" onChange={onChange} />;
}
