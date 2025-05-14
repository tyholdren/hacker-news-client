import { TABS } from '../constants';

export function getTabFromValue(value) {
  return TABS[value.toUpperCase()];
}
