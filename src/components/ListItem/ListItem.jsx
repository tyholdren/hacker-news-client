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
  // <button onClick={() => setActiveView(VIEWS.DETAIL_VIEW)}></button>;
  // NOTE: ADD ICON LATER
  const formattedUrl = url ? formatUrl(url) : null;
  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      <a href={url} target="_blank">
        {title}
      </a>
      <span>{formattedUrl}</span>
      <div>
        <span>{score} points</span>
        <span>by {author}</span>
        <span>0 minutes ago</span>
        <span>{commentCount} comments</span>
      </div>
    </li>
  );
}
