import { VIEWS } from '../../constants';
import formatUrl from '../../utils/formatUrl';
import getTimeDiff from '../../utils/getTimeDiff';
import MetaData from '../MetaData/MetaData';

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
  // NOTE: ADD ICON LATER

  const formattedUrl = url ? formatUrl(url) : null;
  const handleUpdate = () => {
    setActiveView(VIEWS.DETAIL_VIEW);
    setDetailData({ id, text, title, url, author, commentCount, score, time });
  };

  const { metric, difference } = getTimeDiff(time);

  return (
    <li key={id} style={{ marginBottom: '1rem' }}>
      {!url ? (
        <button onClick={() => handleUpdate()}> {title}</button>
      ) : (
        <a href={url} target="_blank">
          {title}
        </a>
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
