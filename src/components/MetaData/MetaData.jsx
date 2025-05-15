import { ReactComponent as PointsIcon } from '../../static/icons/PointsIcon.svg';
import { ReactComponent as AuthorIcon } from '../../static/icons/AuthorIcon.svg';
import { ReactComponent as CommentIcon } from '../../static/icons/CommentIcon.svg';
import { ReactComponent as TimeIcon } from '../../static/icons/TimeIcon.svg';
import { isPlural } from '../../utils';

// <button onClick={() => handleUpdate()}>
// {' '}
// {commentCount} comments
// </button>

export default function MetaData({
  score,
  author,
  difference,
  metric,
  commentCount,
  isDetailView,
}) {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <PointsIcon />
        <span>{score} points</span>
      </div>
      <div>
        <AuthorIcon />
        <span>
          {!isDetailView ? 'by' : ''} {author}
        </span>
      </div>
      <div>
        <TimeIcon />
        <span>
          {difference} {metric} ago
        </span>
      </div>
      {!isDetailView ? (
        commentCount !== null ? (
          <div>
            <CommentIcon />
            <span>{commentCount} comments</span>
          </div>
        ) : null
      ) : (
        <div>
          <CommentIcon />
          <span>
            {commentCount} comment{isPlural(commentCount)}
          </span>
        </div>
      )}
    </div>
  );
}
