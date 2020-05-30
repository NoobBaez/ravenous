import React from 'react';
import './SearchBar.css';

class SortByOptions {
    'Best Match' = 'best_match';
    'Highest Rated' = 'rating';
    'Most Reviewed' = 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOPtions() {
        return Object.keys(SortByOptions).map((sortByOption) => {
            let sortByOptionValue = SortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearcBar-sort-options">
                    <ul>
                        {this.renderSortByOPtions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Seach Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;