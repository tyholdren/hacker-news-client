import getPostComments from './getPostComments';
import { getPostIdUrl } from '../constants';

export default async function getPostDetails(id, setTree, setIsLoading) {
  const path = getPostIdUrl(id);
  try {
    setIsLoading(true);
    const res = await fetch(path);
    if (!res.ok) {
      console.error(res);
      throw Error();
    }
    const data = await res.json();
    const { kids } = data;
    const comments = await getPostComments(kids);
    const parent = { ...data, children: comments };
    setTree(parent);
    return parent;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
