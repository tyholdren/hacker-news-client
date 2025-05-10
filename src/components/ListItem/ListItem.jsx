import { VIEWS } from '../../constants';
import { formatUrl } from '../../utils';

export default function ListItem({
  id,
  title,
  url,
  author,
  commentCount,
  score,
  time,
  setActiveView,
}) {
  // NOTE: ADD ICON LATER

  const formattedUrl = url ? formatUrl(url) : null;
  const hasLink = url;

  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      {!hasLink ? (
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
        <button onClick={() => setActiveView(VIEWS.DETAIL_VIEW)}>
          {' '}
          {commentCount} comments
        </button>
      </div>
    </li>
  );
}
