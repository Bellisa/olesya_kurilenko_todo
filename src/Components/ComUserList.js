import PropTypes from 'prop-types';

export const ComUserList = (props) => {
  const users = (props.users || [])
    .map(user => (
      <li
        key={user.id}
        onClick={() => props.click(user.id)}
      >
        {user[props.field]}
      </li>));
  return <ol className="list-unstyled mb-0">{users}</ol>;
};

ComUserList.propTypes = {
  click: PropTypes.func
};

ComUserList.defaultProps = {
  click: _ => _
};
