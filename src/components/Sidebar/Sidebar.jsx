// import { navigateTo } from '@utils';
import './Sidebar.css';

import SidebarChip from '@components/SidebarChip/SidebarChip.jsx';
import { TABS } from '@constants';
import { HackerNewsIcon } from '@icons';

export default function Sidebar({
  // setActiveView,
  // activeTabObj,
  // setActiveTabObj,
  state,
  dispatch,
}) {
  // <button
  //   className="hacker-news-icon"
  //   onClick={() => navigateTo('new', setActiveTabObj)}
  // >
  // <HackerNewsIcon />
  // </button>
  return (
    <div className="sidebar">
      <HackerNewsIcon />
      <ul>
        {Object.values(TABS).map(({ id, icon, value }) => {
          return (
            <SidebarChip
              key={id}
              id={id}
              icon={icon}
              value={value}
              state={state}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </div>
  );
}

// export default function Sidebar({
//   setActiveView,
//   activeTabObj,
//   setActiveTabObj,
// }) {
//   return (
//     <div className="sidebar">
//       <button
//         className="hacker-news-icon"
//         onClick={() => navigateTo('new', setActiveTabObj)}
//       >
//         <HackerNewsIcon />
//       </button>
//       <ul>
//         {Object.values(TABS).map(({ id, icon, value }) => {
//           return (
//             <SidebarChip
//               key={id}
//               id={id}
//               icon={icon}
//               value={value}
//               setActiveView={setActiveView}
//               activeTabObj={activeTabObj}
//               setActiveTabObj={setActiveTabObj}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
