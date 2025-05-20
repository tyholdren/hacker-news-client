import { SIZE } from '@constants';

import { ACTIONS } from '../state/appReducer';
import fetchBatchPosts from './fetchBatchPosts';
import fetchIds from './fetchIds';

export default async function handleTabInit({
  tab,
  cache,
  dispatch,
  startIndex,
  isLoadingMore = false,
}) {
  if (Object.hasOwn(cache, tab.value) && !isLoadingMore) {
    dispatch({
      type: ACTIONS.SET_ACTIVE_VIEW,
      payload: {
        activeView: VIEWS.OVERVIEW,
        activeTab: TABS[tab.value.toUpperCase()],
      },
    });
    return;
  }
  dispatch({
    type: ACTIONS.FETCH_START,
    payload: { isLoadingMore },
  });

  try {
    const ids = await fetchIds(tab.ids);
    const postIds = ids.slice(startIndex, startIndex + SIZE);
    const posts = await fetchBatchPosts(postIds);

    dispatch({
      type: ACTIONS.FETCH_SUCCESS,
      payload: {
        tab,
        ids,
        posts,
        startIndex: startIndex + SIZE,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
/* 
export default async function handleTabInit({
  tab,
  cache,
  setCache,
  startIndex,
  setIsLoading = () => {},
  isLoadingMore = false,
}) {
  const hasData = !!cache[tab?.value]?.data.length;
  if (!hasData) {
    setIsLoading(true);
  }
  if (Object.hasOwn(cache, tab.value) && !isLoadingMore) {
    setIsLoading(false);
    return;
  }

  try {
    const ids = await fetchIds(tab.ids);
    const postIds = ids.slice(startIndex, startIndex + SIZE);
    const posts = await fetchBatchPosts(postIds);

    setCache(prevCache => ({
      ...prevCache,
      [tab.value]: {
        ids,
        data: [...(prevCache[tab.value]?.data || []), ...posts],
        startIndex: startIndex + SIZE,
      },
    }));
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
} */
