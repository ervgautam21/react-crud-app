import React from 'react'
const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <div>
        <input
            type="text"
            placeholder='Serach...'
            value={filterText}
            onChange={onFilter}
        />
        <button type="button" onClick={onClear}>
            X
        </button>
    </div>
);
export default FilterComponent