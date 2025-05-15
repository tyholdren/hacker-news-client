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
  // NOTE: WE DON'T NEED LOGIC FOR THE COMMENT BUTTON TO
  // TAKE US TO THE DETAIL PAGE -- REMOVE THIS
  const { value, desc } = activeTabObj;
  const { data, startIndex, ids } = cacheState[activeTabObj.value] || {};
  return (
    <div>
      {data ? (
        <>
          <h2>{value}</h2>
          <span>{desc}</span>
          <ul style={{ listStyleType: 'none' }}>
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
              handleTabInit({
                tab: activeTabObj,
                cache: cacheState,
                setCache,
                startIndex,
                isLoadingMore: true,
              });
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
