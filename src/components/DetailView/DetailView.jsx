import { useState, useEffect } from 'react';
import { VIEWS } from '../../constants';
import getPostDetails from '../../utils/getPostDetails';
import parseHTML from '../../utils/parseHTML';
import Comment from '../Comment/Comment';

export default function DetailView({ detailData, setActiveView }) {
  const [tree, setTree] = useState([]);
  const { id, text, title, url, author, commentCount, score, time } =
    detailData;

  useEffect(() => {
    getPostDetails(id, setTree);
  }, []);
  console.log({ tree });

  return (
    <div>
      <button onClick={() => setActiveView(VIEWS.OVERVIEW)}>Back</button>
      <div style={{ marginLeft: '5rem' }}>
        <h1>{title}</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>{score} points</span>
          <span>{author}</span>
          <span>0 minutes ago</span>
          <span>
            {commentCount} comment{commentCount > 1 ? 's' : ''}
          </span>
        </div>
        <div>{parseHTML(text)}</div>
        <ul>
          {tree.children &&
            tree.children.map(child => {
              return <Comment data={child} />;
            })}
        </ul>
      </div>
    </div>
  );
}
