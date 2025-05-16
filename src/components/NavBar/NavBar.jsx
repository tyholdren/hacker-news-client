import { HackerNewsIcon, HamburgerButton } from '@icons';
import { navigateTo } from '@utils';

export default function NavBar({
  setActiveTabObj,
  showPortal,
  toggleShowPortal,
}) {
  return (
    <div className="navBar">
      <button
        // className="hacker-news-icon"
        onClick={() => navigateTo('new', setActiveTabObj)}
      >
        <HackerNewsIcon />
      </button>
      <button onClick={() => toggleShowPortal(!showPortal)}>
        <HamburgerButton />
      </button>
    </div>
  );
}
