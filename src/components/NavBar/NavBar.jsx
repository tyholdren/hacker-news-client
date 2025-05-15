import { ReactComponent as HackerNewsIcon } from '../../static/icons/HackerNewsIcon.svg';
import { ReactComponent as HamburgerButton } from '../../static/icons/HamburgerButton.svg';
import { getTabFromValue } from '../../utils/getTabFromValue.js';

export default function NavBar({
  setActiveTabObj,
  showPortal,
  toggleShowPortal,
}) {
  return (
    <div
      className="navBar"
      style={{ height: '3rem', borderBottom: '1px solid black' }}
    >
      <button
        onClick={() => {
          const currentTab = getTabFromValue('new');
          setActiveTabObj(currentTab);
        }}
      >
        <HackerNewsIcon />
      </button>
      <button onClick={() => toggleShowPortal(!showPortal)}>
        <HamburgerButton />
      </button>
    </div>
  );
}
