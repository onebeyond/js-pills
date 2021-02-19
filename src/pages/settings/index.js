import React from 'react';
import Layout from '../../layout/layout';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const settings = () => {
  return (
    <Layout>
      <div className='card settings-card'>
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
      </div>
    </Layout>
  );
};

export default settings;
