import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { StaticQuery, graphql } from 'gatsby';
import Search from '../search';

import Logo from '../../../assets/svg/GS_logo.svg';

const navbar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <header className='navbar'>
          <Link to={'/'}>
            <Logo className='logo' />
          </Link>
          <div className="flex">
            <Search searchIndex={data.siteSearchIndex.index} />
            <Link to={'/settings'}>
              <FontAwesomeIcon icon={faSlidersH} size='lg' className='settings' />
            </Link>
          </div>
        </header>
      )}
    />
  );
};

export default navbar;
