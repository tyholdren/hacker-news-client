import { PointsIcon, AuthorIcon, CommentIcon, TimeIcon } from '@icons';
import { isPlural } from '@utils';

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
