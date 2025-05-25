import { getTimeDiff, parseHTML, sortByAscending } from '@utils';
import './Comment.css';
export default function Comment({ isParentComment, data }) {
  const { by, time, text, children = null } = data;
  if (text === undefined) return;

  const { metric, difference } = getTimeDiff(time);

  return (
    <li className={isParentComment ? 'comment--parent' : 'comment'}>
      <div className="comment__container">
        <p className="comment__container__metadata">
          <b className="metadata__text">{by}</b>
          <span className="metadata__time">•</span>
          <span className="metadata__time">
            {difference} {metric} ago
          </span>
        </p>
        <div className="comment__text"> {parseHTML(text)}</div>
      </div>
      {children && (
        <div className="comment__children__container">
          <ul className="children">
            <div className="children__content">
              {sortByAscending(children, 'time').map((child, index) => {
                return (
                  <>
                    <div
                      className={[
                        'comment-link',
                        index === 0 && 'comment-link--primary',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    ></div>
                    <Comment key={index} isParentComment={false} data={child} />
                  </>
                );
              })}
            </div>
          </ul>
        </div>
      )}
    </li>
  );
}
