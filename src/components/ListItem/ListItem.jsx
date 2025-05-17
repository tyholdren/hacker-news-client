import './ListItem.css';

import MetaData from '@components/MetaData/MetaData';
import { VIEWS } from '@constants';
import { ArticleIcon, ExternalIcon } from '@icons';
import { formatUrl, getTimeDiff } from '@utils';

import { ACTIONS } from '../../state/appReducer';
export default function ListItem({
  id,
  title,
  text,
  url,
  author,
  commentCount = null,
  score,
  time,
  dispatch,
}) {
  const formattedUrl = url ? formatUrl(url) : null;

  const showDetail = () => {
    dispatch({
      type: ACTIONS.SET_ACTIVE_VIEW,
      payload: { activeView: VIEWS.DETAIL_VIEW },
    });
    dispatch({
      type: ACTIONS.SET_DETAIL_DATA,
      payload: { id, title, text, url, author, commentCount, score, time },
    });
  };

  const { metric, difference } = getTimeDiff(time);
  const hasExternalLink = url;
  const icon = !hasExternalLink ? <ArticleIcon /> : <ExternalIcon />;

  return (
    <li key={id} className="list-item">
      <div>{icon}</div>
      <div>
        <div className="list-item__primary-content">
          {!hasExternalLink ? (
            <button
              className="list-item__primary-content__btn"
              onClick={() => showDetail()}
            >
              {' '}
              {title}
            </button>
          ) : (
            <a
              className="list-item__primary-content__title"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          )}

          <span className="list-item__primary-content__website">
            {formattedUrl}
          </span>
        </div>
        <div>
          <MetaData
            score={score}
            author={author}
            difference={difference}
            metric={metric}
            commentCount={commentCount}
            isDetailView={false}
          />
        </div>
      </div>
    </li>
  );
}
