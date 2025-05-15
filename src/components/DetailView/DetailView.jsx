import { useState, useEffect } from 'react';
import { VIEWS } from '../../constants';
import getTimeDiff from '../../utils/getTimeDiff';
import getPostDetails from '../../utils/getPostDetails';
import parseHTML from '../../utils/parseHTML';
import Comment from '../Comment/Comment';
import sortByAscending from '../../utils/sortByAscending';

import MetaData from '../MetaData/MetaData';
import isPlural from '../../utils/isPlural';
import Loading from '../Loading/Loading';

export default function DetailView({ detailData, setActiveView }) {
  const [tree, setTree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    id,
    text,
    title,
    url,
    author,
    commentCount = 0,
    score,
    time,
  } = detailData;

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
          <Loading />
        )}
      </div>
    </div>
  );
}
