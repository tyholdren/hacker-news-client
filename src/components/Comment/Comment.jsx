import { getTimeDiff, parseHTML, sortByAscending } from '@utils';
import './Comment.css';
export default function Comment({ isRootComment, data }) {
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
        <div className="child__container">
          <ul className="comment__children">
            <div className="content__container">
              {sortByAscending(children, 'time').map((child, index) => {
                return (
                  <>
                    <div
                      className={[
                        'rectangle1',
                        index === 0 && 'rectangle--first',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    ></div>
                    <Comment key={index} isRootComment={false} data={child} />
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
