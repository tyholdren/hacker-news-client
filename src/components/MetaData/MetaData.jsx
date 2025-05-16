import { AuthorIcon, CommentIcon, PointsIcon, TimeIcon } from '@icons';
import { isPlural } from '@utils';
import './MetaData.css';
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
      <div className="meta-data__item">
        <PointsIcon />
        <span className="meta-data__item__text">{score} points</span>
      </div>
      <div className="meta-data__item">
        <AuthorIcon />
        <span className="meta-data__item__text">
          {!isDetailView ? 'by' : ''} <span>{author}</span>
        </span>
      </div>
      <div className="meta-data__item">
        <TimeIcon />
        <span className="meta-data__item__text">
          {difference} {metric} ago
        </span>
      </div>
      {!isDetailView ? (
        commentCount !== null ? (
          <div className="meta-data__item">
            <CommentIcon />
            <span className="meta-data__item__text">
              {commentCount} comments
            </span>
          </div>
        ) : null
      ) : (
        <div className="meta-data__item">
          <CommentIcon />
          <span>
            {commentCount} comment{isPlural(commentCount)}
          </span>
        </div>
      )}
    </div>
  );
}
