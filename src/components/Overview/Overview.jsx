import { formatUrl } from '../../utils.js';
import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({ overviewData, setActiveView }) {
  //<a href={url} target="_blank">
  const { HEADER, SUB_HEADER, content } = overviewData;

  return (
    <div>
      <h2>{HEADER}</h2>
      <span>{SUB_HEADER}</span>
      {overviewData && content ? (
        <ul>
          {content.map(({ id, title, url }) => {
            const formattedUrl = url ? formatUrl(url) : null;

            return (
              <ListItem
                key={id}
                id={id}
                url={formattedUrl}
                title={title}
                setActiveView={setActiveView}
              />
            );
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
