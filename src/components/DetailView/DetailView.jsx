import './DetailView.css';
import { LeftArrow } from '@icons/';
import { Comment, Loading, MetaData } from '@components';
import { VIEWS } from '@constants';
import {
  getPostDetails,
  getTimeDiff,
  isPlural,
  parseHTML,
  sortByAscending,
} from '@utils';
import { useEffect, useState } from 'react';

import { ACTIONS } from '../../state/appReducer';

export default function DetailView({ state, dispatch }) {
  const [tree, setTree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    id,
    text,
    title,
    author,
    commentCount = 0,
    score,
    time,
  } = state.detailData;

  useEffect(() => {
    getPostDetails(id, setTree, setIsLoading);
  }, []);

  const { metric, difference } = getTimeDiff(time);

  return (
    <div className="detail-container">
      <div className="detail-container__back-btn">
        <button
          className="back-btn"
          onClick={() =>
            dispatch({
              type: ACTIONS.SET_ACTIVE_VIEW,
              payload: {
                activeView: VIEWS.OVERVIEW,
                activeTab: state.activeTab,
              },
            })
          }
        >
          <LeftArrow />
          Back
        </button>
      </div>

      <div className="detail-container__article">
        <h1 className="article__title">{title}</h1>
        <MetaData
          score={score}
          author={author}
          difference={difference}
          metric={metric}
          commentCount={commentCount}
          isDetailView={true}
        />
        <div className="article__body">{text && <p>{parseHTML(text)}</p>}</div>
        <h4 className="comment-count">
          {commentCount} comment{isPlural(commentCount)}
        </h4>
        {!isLoading ? (
          <ul>
            {tree.children &&
              sortByAscending(tree.children, 'time').map((child, index) => {
                return (
                  <Comment key={index} isRootComment={true} data={child} />
                );
              })}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
