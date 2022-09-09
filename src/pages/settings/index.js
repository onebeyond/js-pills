import React from 'react';
import { useTheme } from '@skagami/gatsby-plugin-dark-mode';

import Layout from '../../layouts/mainLayout';
import Card from '../../layouts/cardLayout';

const settings = () => {
  const [theme, toggleTheme] = useTheme();

  if (theme === null) {
    return null;
  }

  return (
    <Layout>
      <Card className='settings-card'>
        <div className='dark-mode'>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <span className='slider round'></span>
          </label>
          {'Dark mode'}
        </div>
      </Card>
    </Layout>
  );
};

export default settings;
