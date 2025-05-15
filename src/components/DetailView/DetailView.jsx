import { useState, useEffect } from 'react';
import { VIEWS } from '@constants';
import Comment from '@components/Comment/Comment';
import MetaData from '@components/MetaData/MetaData';
import Loading from '@components/Loading/Loading';
import {
  getTimeDiff,
  getPostDetails,
  parseHTML,
  sortByAscending,
  isPlural,
} from '@utils';

export default function DetailView({ detailData, setActiveView }) {
  const [tree, setTree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id, text, title, author, commentCount = 0, score, time } = detailData;

  useEffect(() => {
    getPostDetails(id, setTree, setIsLoading);
  }, []);

  const { metric, difference } = getTimeDiff(time);

  return (
    <div>
      <button onClick={() => setActiveView(VIEWS.OVERVIEW)}>Back</button>
      <div style={{ marginLeft: '5rem' }}>
        <h1>{title}</h1>
        <MetaData
          score={score}
          author={author}
          difference={difference}
          metric={metric}
          commentCount={commentCount}
          isDetailView={true}
        />
        {text && <div>{parseHTML(text)}</div>}
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
          <Loading />
        )}
      </div>
    </div>
  );
}
