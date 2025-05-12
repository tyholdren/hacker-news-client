import { useState, useEffect } from 'react';
import { VIEWS } from '../../constants';
import getTimeDiff from '../../utils/getTimeDiff';
import getPostDetails from '../../utils/getPostDetails';
import parseHTML from '../../utils/parseHTML';
import Comment from '../Comment/Comment';
import sortByAscending from '../../utils/sortByAscending';

export default function DetailView({ detailData, setActiveView }) {
  const [tree, setTree] = useState([]);
  const { id, text, title, url, author, commentCount, score, time } =
    detailData;

  useEffect(() => {
    getPostDetails(id, setTree);
  }, []);

  const { metric, difference } = getTimeDiff(time);

  return (
    <div>
      <button onClick={() => setActiveView(VIEWS.OVERVIEW)}>Back</button>
      <div style={{ marginLeft: '5rem' }}>
        <h1>{title}</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>{score} points</span>
          <span>{author}</span>
          <span>
            {difference} {metric} ago
          </span>
          <span>
            {commentCount} comment{commentCount > 1 ? 's' : ''}
          </span>
        </div>
        <div>{parseHTML(text)}</div>
        <h4>
          {commentCount} comment{commentCount > 1 ? 's' : ''}
        </h4>
        <ul>
          {tree.children &&
            sortByAscending(tree.children, 'time').map(child => {
              return <Comment data={child} />;
            })}
        </ul>
      </div>
    </div>
  );
}
