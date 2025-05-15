import { getTabFromValue } from '.';

export default function navigateTo(value, handleTabUpdate) {
  const currentTab = getTabFromValue(value);
  handleTabUpdate(currentTab);
}
