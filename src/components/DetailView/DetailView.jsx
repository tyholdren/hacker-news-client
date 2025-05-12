import { useState, useEffect } from 'react';
import { VIEWS } from '../../constants';
import getTimeDiff from '../../utils/getTimeDiff';
import getPostDetails from '../../utils/getPostDetails';
import parseHTML from '../../utils/parseHTML';
import Comment from '../Comment/Comment';
import sortByAscending from '../../utils/sortByAscending';

export default function DetailView({ detailData, setActiveView }) {
  const [tree, setTree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id, text, title, url, author, commentCount, score, time } =
    detailData;

  useEffect(() => {
    getPostDetails(id, setTree, setIsLoading);
  }, []);

  const { metric, difference } = getTimeDiff(time);
  const isPlural = value => (value > 1 ? 's' : '');

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
            {commentCount} comment{isPlural(commentCount)}
          </span>
        </div>
        <div>{parseHTML(text)}</div>
        <h4>
          {commentCount} comment{isPlural(commentCount)}
        </h4>
        {!isLoading ? (
          <ul>
            {tree.children &&
              sortByAscending(tree.children, 'time').map(child => {
                return <Comment data={child} />;
              })}
          </ul>
        ) : (
          <span>Loading comments...</span>
        )}
      </div>
    </div>
  );
}
