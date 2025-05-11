import handleTabInit from '../../utils/handleTabInit.js';
import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({
  setActiveView,
  activeTabObj,
  cacheState,
  setCache,
  setDetailData,
}) {
  const { value, desc } = activeTabObj;
  const { data, startIndex } = cacheState[activeTabObj.value] || {};

  return (
    <div>
      <h2>{value}</h2>
      <span>{desc}</span>
      {data ? (
        <>
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
            More
          </button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
