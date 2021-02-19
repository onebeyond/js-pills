import React from 'react';
import Layout from '../../layout/layout';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Card from '../../components/card';

const settings = () => {
  return (
    <Layout>
      <Card className='settings-card'>
        <div className='dark-mode'>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label className='switch'>
                <input
                  type='checkbox'
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />
                <span className='slider round'></span>
              </label>
            )}
          </ThemeToggler>
          {'Dark mode'}
        </div>
      </Card>
    </Layout>
  );
};

export default settings;
