import { URL_BASE } from '../constants';

export default async function fetchBatchPosts(postIds) {
  try {
    const content = await Promise.all(
      postIds.map(async postId => {
        try {
          const res = await fetch(`${URL_BASE}${postId}.json`);
          if (!res.ok) {
            throw new Error('Error fetching content');
          }
          const data = await res.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      })
    );
    return content;
  } catch (error) {
    console.error(error);
  }
}
