import { formatUrl } from '../../utils.js';
import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({ overviewData, setActiveView }) {
  //<a href={url} target="_blank">
  const { HEADER: header, SUB_HEADER: subHeader, content } = overviewData;
  console.log({ content });
  // NOTE: remove overviewData check below after
  // we hook up api call for show and jobs routes
  return (
    <div>
      <h2>{header}</h2>
      <span>{subHeader}</span>
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
