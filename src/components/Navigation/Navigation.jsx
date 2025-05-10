import { useState, useEffect } from 'react';
import { TABS, VIEWS } from '../../constants.js';

export default function Navigation({
  currentView,
  setActiveView,
  setOverviewData,
}) {
  const [activeTab, setActiveTab] = useState(TABS.NEW);

  useEffect(() => {
    handleNavigation();
  }, []);

  async function handleNavigation(value = 'new') {
    const newTab = TABS[value.toUpperCase()];

    try {
      const res = await fetch(newTab.ids);
      if (!res.ok) {
        throw new Error('There was an error story ids');
      }

      const data = await res.json();
      //const stories = await fetchStories(data, newTab);
      const stories = await fetchStories(data.slice(0, 20), newTab);
      setOverviewData({ ...newTab, content: stories });
      setActiveTab(newTab.value);
      if (currentView !== VIEWS.OVERVIEW) {
        setActiveView(VIEWS.OVERVIEW);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchStories(data, tab) {
    const stories = await Promise.all(
      data.map(async id => {
        try {
          const res = await fetch(`${tab.url}${id}.json`);
          if (!res.ok) {
            throw new Error('Error fetching stories');
          }
          const data = await res.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      })
    );
    return stories;
  }

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
                    value.toUpperCase() === activeTab ? 'yellow' : ''
                  }`,
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
