import { VIEWS } from '../../constants';
import formatUrl from '../../utils/formatUrl';
import getTimeDiff from '../../utils/getTimeDiff';
import MetaData from '../MetaData/MetaData';
import { ReactComponent as ArticleIcon } from '../../static/icons/ArticleIcon.svg';
import { ReactComponent as ExternalIcon } from '../../static/icons/ExternalIcon.svg';

export default function ListItem({
  id,
  title,
  text,
  url,
  author,
  commentCount = null,
  score,
  time,
  setActiveView,
  setDetailData,
}) {
  const formattedUrl = url ? formatUrl(url) : null;
  const handleUpdate = () => {
    setActiveView(VIEWS.DETAIL_VIEW);
    setDetailData({ id, text, title, url, author, commentCount, score, time });
  };

  const { metric, difference } = getTimeDiff(time);
  const hasExternalLink = url;

  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      {!hasExternalLink ? (
        <>
          <ArticleIcon />
          <button onClick={() => handleUpdate()}> {title}</button>
        </>
      ) : (
        <>
          <ExternalIcon />
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </>
      )}

      <span>{formattedUrl}</span>
      <MetaData
        score={score}
        author={author}
        difference={difference}
        metric={metric}
        commentCount={commentCount}
        isDetailView={false}
        handleUpdate={handleUpdate}
      />
    </li>
  );
}
