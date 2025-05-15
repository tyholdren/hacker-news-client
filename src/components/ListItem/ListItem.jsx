import './ListItem.css';
import { VIEWS } from '@constants';
import { formatUrl, getTimeDiff } from '@utils';
import MetaData from '../MetaData/MetaData';
import { ArticleIcon, ExternalIcon } from '@icons';

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
    <li key={id} style={{ marginBottom: '1rem' }} className="list-item">
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
      />
    </li>
  );
}
