import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
import "./global.css";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: "var(--textLink)",
      textDecoration: "none"
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    "a.anchor": {
      boxShadow: "none",
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
      stroke: "var(--textLink)",
    },
    h3: {
      fontFamily: "'Roboto Mono', sans-serif",
      fontSize: "1.5rem",
    },
    p: {
      fontFamily: "'Roboto Mono Medium', sans-serif",
      fontSize: "1.125rem",
    },
    hr: {
      background: "var(--hr)",
    },
    small: {
      color: "var(--textNormal)",
    },
  };
};

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
