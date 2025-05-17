import { TABS, VIEWS } from '@constants';

export const defaultTabInitConfig = {
  tab: TABS.NEW,
  cache: {},
  startIndex: 0,
  isLoadingMore: false,
};

export const ACTIONS = {
  FETCH_START: 'fetch-start',
  FETCH_SUCCESS: 'fetch-success',
  FETCH_FAILURE: 'fetch-failure',
  SET_ACTIVE_VIEW: 'set-active-view',
  SET_DETAIL_DATA: 'set-detail-data',
  TOGGLE_PORTAL: 'toggle-portal',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START: {
      return action.payload.isLoadingMore
        ? { ...state }
        : { ...state, isLoading: true };
    }
    case ACTIONS.FETCH_SUCCESS: {
      const { tab, ids, posts, startIndex } = action.payload;
      return {
        ...state,
        isLoading: false,
        cache: {
          ...state.cache,
          [tab.value]: {
            ids,
            data: [...(state.cache[tab.value]?.data || []), ...posts],
            startIndex,
          },
        },
      };
    }
    case ACTIONS.FETCH_FAILURE:
      console.log('fetch failed');
      break;
    case ACTIONS.SET_ACTIVE_VIEW: {
      return {
        ...state,
        activeView: action.payload.activeView,
        activeTab: action.payload.activeTab || state.activeTab,
      };
    }
    case ACTIONS.SET_DETAIL_DATA: {
      return { ...state, detailData: { ...action.payload } };
    }
    case ACTIONS.TOGGLE_PORTAL: {
      return { ...state, showPortal: !state.showPortal };
    }
    default:
      return state;
  }
}

export const initialState = {
  cache: {},
  isLoading: false,
  error: null,
  activeTab: TABS.NEW,
  activeView: VIEWS.OVERVIEW,
  detailData: {},
  showPortal: false,
};
