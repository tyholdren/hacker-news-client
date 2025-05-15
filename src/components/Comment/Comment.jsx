import getTimeDiff from '../../utils/getTimeDiff';
import parseHTML from '../../utils/parseHTML';
import sortByAscending from '../../utils/sortByAscending';

export default function Comment({ data }) {
  const { by, time, text, children = null } = data;
  if (text === undefined) return;

  const { metric, difference } = getTimeDiff(time);

  return (
    <li>
      <p style={{ display: 'flex', gap: '1rem' }}>
        <b>{by}</b>
        <span>
          •{difference} {metric} ago
        </span>
      </p>
      {parseHTML(text)}
      {children && (
        <ul>
          {sortByAscending(children, 'time').map(child => {
            return <Comment data={child} />;
          })}
        </ul>
      )}
    </li>
  );
}
