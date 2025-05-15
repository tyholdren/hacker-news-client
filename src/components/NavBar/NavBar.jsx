import { ReactComponent as HackerNewsIcon } from '../../static/icons/HackerNewsIcon.svg';
import { ReactComponent as HamburgerButton } from '../../static/icons/HamburgerButton.svg';

export default function NavBar({ showPortal, toggleShowPortal }) {
  return (
    <div
      className="navBar"
      style={{ height: '3rem', borderBottom: '1px solid black' }}
    >
      <HackerNewsIcon />
      <button onClick={() => toggleShowPortal(!showPortal)}>
        <HamburgerButton />
      </button>
    </div>
  );
}
