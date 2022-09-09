import React, { useState } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';

import truncate from '../../utils/truncate';

const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState(``);
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);

  const getOrCreateIndex = () => (index ? index : Index.load(searchIndex));

  const search = evt => {
    const query = evt.target.value;

    setIndex(getOrCreateIndex());
    setQuery(query);

    if (index) {
      setResults(
        index
          .search(query, {})
          .map(({ ref }) => index.documentStore.getDoc(ref))
      );
    }
  };

  return (
    <div className='search'>
      <input
        className='search-bar'
        type='text'
        placeholder='Search...'
        value={query}
        onChange={search}
      />
      <ul
        className='dropdown-content'
        style={{ display: results.length <= 0 && 'none' }}
      >
        {results.map(page => (
          <li key={page.id}>
            <Link to={page.slug}>{truncate(page.title, 20)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
