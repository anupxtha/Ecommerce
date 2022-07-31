import React, { useState } from 'react';

import SearchContext from './searchContext';

function SearchState(props) {
  const [searchedItems, setSearchedItems] = useState('');
  const [visibleSearch, setVisibleSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchedItems,
        setSearchedItems,
        visibleSearch,
        setVisibleSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchState;
