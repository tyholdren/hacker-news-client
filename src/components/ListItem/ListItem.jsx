import { VIEWS } from '../../constants';
import { formatUrl } from '../../utils';

export default function ListItem({
  id,
  title,
  url,
  author,
  commentCount = null,
  score,
  time,
  setActiveView,
}) {
  // NOTE: ADD ICON LATER

  const formattedUrl = url ? formatUrl(url) : null;

  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      {!url ? (
        <button onClick={() => setActiveView(VIEWS.DETAIL_VIEW)}>
          {' '}
          {title}
        </button>
      ) : (
        <a href={url} target="_blank">
          {title}
        </a>
      )}

      <span>{formattedUrl}</span>
      <div>
        <span>{score} points</span>
        <span>by {author}</span>
        <span>0 minutes ago</span>
        {commentCount !== null && (
          <button onClick={() => setActiveView(VIEWS.DETAIL_VIEW)}>
            {' '}
            {commentCount} comments
          </button>
        )}
      </div>
    </li>
  );
}
