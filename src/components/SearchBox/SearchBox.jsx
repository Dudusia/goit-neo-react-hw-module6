import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(changeFilter(event.target.value));
  const debounceSetSearchText = useDebouncedCallback(handleFilterChange, 100);

  return (
    <div className={css['wrapper']}>
      <span>Find contacts by name</span>
      <input type="text" onChange={debounceSetSearchText} />
    </div>
  );
};

export default SearchBox;
