import { VIEWS } from '../../constants';
import formatUrl from '../../utils/formatUrl';
import getTimeDiff from '../../utils/getTimeDiff';

import { ReactComponent as PointsIcon } from '../../static/icons/PointsIcon.svg';
import { ReactComponent as AuthorIcon } from '../../static/icons/AuthorIcon.svg';
import { ReactComponent as CommentIcon } from '../../static/icons/CommentIcon.svg';
import { ReactComponent as TimeIcon } from '../../static/icons/TimeIcon.svg';

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

  const { metric, difference } = getTimeDiff(time);

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
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>
          <PointsIcon />
          <span>{score} points</span>
        </div>
        <div>
          <AuthorIcon />
          <span>by {author}</span>
        </div>
        <div>
          <TimeIcon />
          <span>
            {difference} {metric} ago
          </span>
        </div>
        <div>
          <CommentIcon />
          {commentCount !== null && (
            <button onClick={() => handleUpdate()}>
              {' '}
              {commentCount} comments
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
