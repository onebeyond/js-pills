import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../assets/svg/GS_logo.svg';

const navbar = () => {
  return (
    <header className='navbar'>
      <Link to={'/'}>
        <Logo className="logo"/>
      </Link>
      <Link to={'/settings'}>
        <FontAwesomeIcon icon={faSlidersH} size='lg' className='settings' />
      </Link>
    </header>
  );
};

export default navbar;
