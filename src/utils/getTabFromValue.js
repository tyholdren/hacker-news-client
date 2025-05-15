import { TABS } from '@constants';

export default function getTabFromValue(value) {
  return TABS[value.toUpperCase()];
}
