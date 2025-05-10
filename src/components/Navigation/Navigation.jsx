import { useState, useEffect } from 'react';
import { TABS } from '../../constants.js';
import { getTabFromValue } from '../../utils/getTabFromValue.js';

export default function Navigation({ cacheState, handleNavigation }) {
  const [activeTab, setActiveTab] = useState(TABS.NEW);

  useEffect(() => {
    const defaultTab = getTabFromValue('new');
    handleNavigation(defaultTab, setActiveTab);
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
                onClick={() => {
                  const currentTab = getTabFromValue(value);
                  handleNavigation(currentTab, setActiveTab);
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
