/**
 * Return truncate string
 * @param  {string} input - String to truncate
 * @param  {number} length - Length of truncate string
 */
const truncate = (input, length) =>
  input.length > length ? `${input.substring(0, length)}...` : input;

export default truncate;
