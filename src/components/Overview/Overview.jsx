import { formatUrl } from '../../utils.js';
import ListItem from './ListItem.jsx';

export default function Overview({ data, toggleActiveView }) {
  //<a href={url} target="_blank">
  const { HEADER, SUB_HEADER, content } = data;
  return (
    <div>
      <h2>{HEADER}</h2>
      <span>{SUB_HEADER}</span>
      {content ? (
        <ul>
          {data.content.map(({ id, title, url }) => {
            const formattedUrl = url ? formatUrl(url) : null;

            return (
              <ListItem
                key={id}
                id={id}
                url={formattedUrl}
                title={title}
                toggleActiveView={toggleActiveView}
              />
            );
          })}
        </ul>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}
