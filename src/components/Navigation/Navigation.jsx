import { TABS, VIEWS } from '../../constants.js';
import { getTabFromValue } from '../../utils/getTabFromValue.js';

export default function Navigation({
  setActiveView,
  activeTabObj,
  setActiveTabObj,
}) {
  return (
    <div>
      <h4>Hacker News</h4>
      <ul className="nav-panel">
        {Object.values(TABS).map(({ id, icon, value }) => {
          return (
            <li key={id}>
              {icon}
              <button
                style={{
                  backgroundColor: `${
                    value === activeTabObj.value ? 'yellow' : ''
                  }`,
                }}
                onClick={() => {
                  const currentTab = getTabFromValue(value);
                  setActiveTabObj(currentTab);
                  setActiveView(VIEWS.OVERVIEW);
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
