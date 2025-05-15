import { getTabFromValue } from '../../utils/getTabFromValue';
import { VIEWS } from '../../constants';
export default function SidebarChip({
  id,
  icon,
  value,
  setActiveView,
  activeTabObj,
  setActiveTabObj,
  toggleShowPortal = undefined,
}) {
  return (
    <li key={id}>
      {icon}
      <button
        style={{
          backgroundColor: `${value === activeTabObj.value ? 'yellow' : ''}`,
        }}
        onClick={() => {
          if (toggleShowPortal) {
            toggleShowPortal(false);
          }
          const currentTab = getTabFromValue(value);
          setActiveTabObj(currentTab);
          setActiveView(VIEWS.OVERVIEW);
        }}
      >
        {value}
      </button>
    </li>
  );
}
