import React from 'react';
import '../assets/css/SortFilter.css';

function SortFilter({ onSort, onFilter }) {
    return (
        <div className="sort-filter">
            <div className="sort">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" onChange={onSort}>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>
            <div className="filter">
                <label htmlFor="filter">Filter:</label>
                <input type="text" id="filter" placeholder="Search products..." onChange={onFilter} />
            </div>
        </div>
    );
}

export default SortFilter;
