import { useState, useEffect } from 'react';
import { NEW_STORIES_IDS, NEW_STORIES_URL } from './constants';

export default function NewPage({ startingIndex, pageSize }) {
  // EVENTUALLY WILL NEED TO USE A CUSTOM HOOK FOR
  // SAME TYPE OF CALLS IN EACH PAGE
  const [ids, setIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [start, setStart] = useState(startingIndex);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNew() {
      setIsLoading(true);
      try {
        const res = await fetch(NEW_STORIES_IDS);
        if (!res.ok) {
          throw new Error('There was an error story ids');
        }

        const data = await res.json();
        setIds(data);
        fetchStories(data.slice(start, start + pageSize));
        setStart(prev => prev + pageSize);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    }

    fetchNew();
  }, []);

  async function fetchStories(data) {
    const stories = await Promise.all(
      data.map(async id => {
        try {
          const res = await fetch(`${NEW_STORIES_URL}${id}.json`);
          if (!res.ok) {
            throw new Error('Error fetching stories');
          }
          const data = await res.json();
          return data;
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })
    );
    console.log({ stories });
    setStories(stories);
  }

  function formatUrl(url) {
    return `(${
      url.replaceAll('https://', '').replaceAll('www.', '').split('/')[0]
    })`;
  }

  return (
    <div>
      <h1>New</h1>
      <p>Discover the latest submissions in the Hacker News Community.</p>
      {isLoading ? (
        <p>Loading Results...</p>
      ) : (
        <ul>
          {stories.map(({ id, title, url }) => {
            const formattedUrl = url ? formatUrl(url) : null;

            return (
              <li key={id}>
                {title}
                <a href={url} target="_blank">
                  {formattedUrl}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
