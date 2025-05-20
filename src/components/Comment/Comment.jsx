import { getTimeDiff, parseHTML, sortByAscending } from '@utils';
import './Comment.css';
export default function Comment({ isRootComment, data, depth }) {
  const { by, time, text, children = null } = data;
  if (text === undefined) return;

  const { metric, difference } = getTimeDiff(time);

  return (
    <li className={isRootComment ? 'comment__root' : 'comment'}>
      <div className="comment__box">
        <p className="comment__meta">
          <b>{by}</b>
          <span>
            •{difference} {metric} ago
          </span>
        </p>
        <div className="comment__text"> {parseHTML(text)}</div>
      </div>
      {children && (
        <div>
          <span className="threadline" aria-hidden="true"></span>
          <div className="child__container">
            <div className="rectangle__container">
              <div className="rectangle1"></div>
              <div className="rectangle2"></div>
            </div>
            <ul className="comment__children">
              {sortByAscending(children, 'time').map((child, index) => {
                return (
                  <Comment
                    key={index}
                    isRootComment={false}
                    data={child}
                    depth={depth + 1}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}
