import { useState, useEffect } from 'react';
import getHandleNavigation from '../../utils/getHandleNavigation';
import { TABS } from '../../constants.js';

export default function Navigation({
  currentView,
  setActiveView,
  setOverviewData,
}) {
  const [activeTab, setActiveTab] = useState(TABS.NEW);

  const handleNavigation = getHandleNavigation({
    setOverviewData,
    setActiveTab,
    currentView,
    setActiveView,
  });

  useEffect(() => {
    handleNavigation('new');
  }, []);

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
                  backgroundColor: `${value === activeTab ? 'yellow' : ''}`,
                }}
                onClick={() => handleNavigation(value)}
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

// function NavElement({ icon, value }) {
//   // <a href="">{value}</a>
//   return (
//     <li>
//       {icon}
//       <button onClick={() => handleOverview(value)}>{value}</button>
//     </li>
//   );
// }
