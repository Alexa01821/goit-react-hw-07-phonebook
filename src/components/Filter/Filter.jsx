import { useDispatch } from 'react-redux';
import { FilterContainer } from './FilterStyled';
import { setValueFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const getFilterData = ({ target: { value } }) => {
    dispatch(setValueFilter(value));
  };
  return (
    <FilterContainer>
      <label className="filter-label">
        Find contacts by Name
        <input
          className="filter-input"
          type="text"
          name="filter"
          onChange={getFilterData}
        />
      </label>
    </FilterContainer>
  );
};
