export const ComNavMenu = ({ pages }) => (
  <ul className="navbar-nav mr-auto">
    {
      (pages || [])
        .map(page => (
          <li className="nav-item" key={page}>
            <a className="nav-link" href={`/${page.toLowerCase()}`}>{page}</a>
          </li>
        ))
    }
  </ul>
);

