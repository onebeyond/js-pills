import Typography from 'typography';
import githubTheme from 'typography-theme-github';
import './global.css';

githubTheme.overrideThemeStyles = () => ({
  h3: {
    fontSize: '24px',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'a:hover': {
    color: 'var(--textLink)',
    textDecoration: 'none',
  },
});

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
