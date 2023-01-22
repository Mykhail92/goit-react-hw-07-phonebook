import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';
import { LabelFilter } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <div>
      <LabelFilter>Find contacts by Name </LabelFilter>
      <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};
