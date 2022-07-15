import React, { useState } from 'react';

import SearchContext from './searchContext';

function SearchState(props) {
  const [searchedItems, setSearchedItems] = useState('');

  return (
    <SearchContext.Provider value={{ searchedItems, setSearchedItems }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchState;
