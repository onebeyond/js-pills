import React from 'react';
import Layout from '../../layout/layout';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Card from '../../components/card';

const settings = () => {
  return (
    <Layout>
      <Card className='settings-card'>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type='checkbox'
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />
              {'Dark mode'}
            </label>
          )}
        </ThemeToggler>
      </Card>
    </Layout>
  );
};

export default settings;
