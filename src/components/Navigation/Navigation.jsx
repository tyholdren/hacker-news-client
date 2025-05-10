import { useState, useEffect } from 'react';
import { TABS, VIEWS } from '../../constants.js';

export default function Navigation({ toggleOverview, toggleActiveView }) {
  const [data, setData] = useState([]);
  const [ids, setIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS.NEW);

  useEffect(() => {
    async function fetchNew() {
      console.log('fetching new');
      //setIsLoading(true);
      try {
        const res = await fetch(activeTab.ids);

        if (!res.ok) {
          throw new Error('There was an error story ids');
        }

        const data = await res.json();
        setIds(data);

        const stories = await fetchStories(data.slice(0, 20));
        toggleOverview({ ...activeTab, content: stories });
        //fetchStories(data.slice(start, start + pageSize));
        //setStart(prev => prev + pageSize);
      } catch (error) {
        //setIsLoading(false);
        console.error(error);
      }
    }

    fetchNew();
  }, [activeTab]);

  async function fetchStories(data) {
    const stories = await Promise.all(
      data.map(async id => {
        try {
          const res = await fetch(`${activeTab.url}${id}.json`);
          if (!res.ok) {
            throw new Error('Error fetching stories');
          }
          const data = await res.json();
          return data;
        } catch (error) {
          console.error(error);
        } finally {
          //setIsLoading(false);
        }
      })
    );
    return stories;
  }

  function handleNavigation(value) {
    // could optimize by passing curView, and only
    // update if curView !== views.overview
    toggleActiveView(VIEWS.OVERVIEW);
    const newTab = TABS[value.toUpperCase()];
    setActiveTab(newTab);
  }

  return (
    <div>
      <h4>Hacker News</h4>
      <ul className="nav-panel">
        {Object.values(TABS).map(({ id, icon, value }) => {
          return (
            <li key={id}>
              {icon}
              <button onClick={() => handleNavigation(value)}>{value}</button>
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
