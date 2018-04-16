import PropTypes from 'prop-types';

export const TabNav = ({ list, select, active }) => {
  const onClick = (e, id) => {
    e.preventDefault();
    select(id);
  };

  return (
    <nav className="nav-tab">
      <ul className="nav nav-tabs">{list.map((el, index) =>
        (
          <li
            key={index}
            className="nav-item"
          >
            <a
              className={(active === index) ? 'nav-link active' : 'nav-link'}
              href="/"
              onClick={e => onClick(e, index)}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>);
};

TabNav.prototype = {
  select: PropTypes.func,
  list: PropTypes.array,
  active: PropTypes.number
};
TabNav.defaultProps = {
  select: _ => _,
  list: [],
  active: 0
};

