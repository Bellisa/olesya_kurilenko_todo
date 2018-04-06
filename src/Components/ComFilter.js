export const ComFilter = props => (
  <input
    type="text"
    onChange={({ target }) => props.onFilter(target.value)}
  />
);

