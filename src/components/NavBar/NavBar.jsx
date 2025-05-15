import { ReactComponent as HackerNewsIcon } from '../../static/icons/HackerNewsIcon.svg';
import { ReactComponent as HamburgerButton } from '../../static/icons/HamburgerButton.svg';

export default function NavBar({ showSidebar, toggleShowSidebar }) {
  return (
    <div style={{ height: '3rem', borderBottom: '1px solid black' }}>
      <HackerNewsIcon />
      <button onClick={() => toggleShowSidebar(!showSidebar)}>
        <HamburgerButton />
      </button>
    </div>
  );
}
