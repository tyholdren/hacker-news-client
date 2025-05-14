import handleTabInit from '../../utils/handleTabInit.js';
import ListItem from '../ListItem/ListItem.jsx';
import { ReactComponent as DownArrowIcon } from '../../static/icons/DownArrowIcon.svg';
import Loading from '../Loading/Loading.jsx';

export default function Overview({
  setActiveView,
  activeTabObj,
  cacheState,
  setCache,
  setDetailData,
}) {
  const { value, desc } = activeTabObj;
  const { data, startIndex, ids } = cacheState[activeTabObj.value] || {};
  return (
    <div>
      {data ? (
        <>
          <h2>{value}</h2>
          <span>{desc}</span>
          <ul>
            {data.map(
              ({ id, text, title, url, by, descendants, score, time }) => {
                return (
                  <ListItem
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    url={url}
                    author={by}
                    commentCount={descendants}
                    score={score}
                    time={time}
                    setActiveView={setActiveView}
                    setDetailData={setDetailData}
                  />
                );
              }
            )}
          </ul>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            disabled={startIndex >= ids.length}
            onClick={() => {
              handleTabInit(
                activeTabObj,
                cacheState,
                setCache,
                startIndex,
                true
              );
            }}
          >
            More <DownArrowIcon />
          </button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
