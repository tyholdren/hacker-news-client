import { SIZE } from '../constants';
import fetchBatchPosts from './fetchBatchPosts';
import fetchIds from './fetchIds';

export default async function handleTabInit(
  tab,
  cache,
  setCache,
  startIndex,
  isLoadingMore = false
) {
  console.log('fetching posts');
  if (Object.hasOwn(cache, tab.value) && !isLoadingMore) {
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
  }
}
