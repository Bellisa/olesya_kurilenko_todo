import PropTypes from 'prop-types';

export const ComUserList = (props) => {
  const users = (props.users || [])
    .map(user => (
      <li
        key={user.id}
      >
        {user.name}
      </li>));
  return <ol className="list-unstyled mb-0">{users}</ol>;
};

ComUserList.propTypes = {
  users: PropTypes.array
};

ComUserList.defaultProps = {
  users: []
};
