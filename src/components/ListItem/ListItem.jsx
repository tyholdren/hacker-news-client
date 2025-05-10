import { VIEWS } from '../../constants';
import { formatUrl } from '../../utils';

export default function ListItem({
  id,
  title,
  text,
  url,
  author,
  commentCount = null,
  score,
  time,
  setActiveView,
  setDetailData,
}) {
  // NOTE: ADD ICON LATER

  const formattedUrl = url ? formatUrl(url) : null;
  const handleUpdate = () => {
    setActiveView(VIEWS.DETAIL_VIEW);
    setDetailData({ id, text, title, url, author, commentCount, score, time });
  };

  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      {!url ? (
        <button onClick={() => handleUpdate()}> {title}</button>
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
          <button onClick={() => handleUpdate()}>
            {' '}
            {commentCount} comments
          </button>
        )}
      </div>
    </li>
  );
}
