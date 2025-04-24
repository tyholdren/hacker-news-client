import { ReactComponent as HomeIcon } from './static/icons/HomeIcon.svg';
const NAVS = {
  new: { id: 0, icon: <HomeIcon />, value: 'New' },
  ask: { id: 1, icon: <HomeIcon />, value: 'Ask' },
  show: { id: 2, icon: <HomeIcon />, value: 'Show' },
  jobs: { id: 3, icon: <HomeIcon />, value: 'Jobs' },
};

export default function NavPanel() {
  return (
    <div>
      <h4>Hacker News</h4>
      <ul className="nav-panel">
        {Object.values(NAVS).map(({ id, icon, value }) => {
          return <NavElement key={id} icon={icon} value={value} />;
        })}
      </ul>
    </div>
  );
}

function NavElement({ icon, value }) {
  return (
    <li>
      {icon}
      <a href="">{value}</a>
    </li>
  );
}
