const ID_BASE_START = 'https://hacker-news.firebaseio.com/v0/item/';
const ID_BASE_END = '.json?print=pretty';
const getIdURL = value => `${ID_BASE_START}${value}${ID_BASE_END}`;

export default async function getPostComments(children) {
  const res = await Promise.all(
    children.map(async childId => {
      try {
        const childPath = getIdURL(childId);
        const res = await fetch(childPath);
        if (!res.ok) {
          throw Error();
        }
        const child = await res.json();

        if (child.kids) {
          const grandkids = await getPostComments(child.kids);
          child.children = grandkids;
        }
        return child;
      } catch (error) {
        console.error(error);
      }
    })
  );
  return res;
}
