import css from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div className={css['wrapper']}>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
