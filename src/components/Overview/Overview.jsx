import ListItem from '@components/ListItem/ListItem.jsx';
import Loading from '@components/Loading/Loading.jsx';
import { DownArrowIcon } from '@icons';
import { handleTabInit } from '@utils';

export default function Overview({
  isLoading,
  setActiveView,
  activeTabObj,
  cacheState,
  setCache,
  setDetailData,
}) {
  if (isLoading) {
    return <Loading />;
  }

  const { value, desc } = activeTabObj;
  const {
    data = [],
    startIndex = 0,
    ids = [],
  } = cacheState[activeTabObj.value] || {};

  return (
    <div>
      <h2>{value}</h2>
      <span>{desc}</span>
      <ul style={{ listStyleType: 'none' }}>
        {data.map(({ id, text, title, url, by, descendants, score, time }) => {
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
        })}
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
    </div>
  );
}
