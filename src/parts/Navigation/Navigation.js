import './navigation.scss';
import { ComNavMenu } from '../../Components/ComNavMenu';
import { ComUserNav } from '../../Components/ComUserNav';

export const Navigation = ({
  pages, user, setLoginState
}) =>
  (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-nav">
      <a
        className="navbar-brand font-italic "
        href="/"
        title="Olesya Kurilenko : ToDo"
      >
        <img
          src="/images/1.jpg"
          alt="O.K. ToDo"
          width="50"
        />
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarCollapse"
      >
        <ComNavMenu pages={pages} />
        <ComUserNav user={user} setLoginState={setLoginState} />
      </div>
      <div className="flex-row ml-md-auto d-none d-md-flex text-white" />
    </nav>
  );
