import './Overview.css';

import ListItem from '@components/ListItem/ListItem.jsx';
import Loading from '@components/Loading/Loading.jsx';
import { DownArrowIcon } from '@icons';
import { handleTabInit } from '@utils';

export default function Overview({ state, dispatch }) {
  if (state.isLoading) {
    return <Loading />;
  }

  const { value, desc } = state.activeTab;
  const {
    data = [],
    startIndex = 0,
    ids = [],
  } = state.cache[state.activeTab.value] || {};

  return (
    <div className="overview">
      <h2 className="overview__title">{value}</h2>
      <p className="overview__desc">{desc}</p>
      <ul>
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
              dispatch={dispatch}
            />
          );
        })}
      </ul>
      <button
        className="load-more__btn"
        disabled={startIndex >= ids.length}
        onClick={() => {
          handleTabInit({
            tab: state.activeTab,
            cache: state.cache,
            dispatch,
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

/*

  return (
    <div className="overview">
      <h2 className="overview__title">{value}</h2>
      <p className="overview__desc">{desc}</p>
      <ul>
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
        className="load-more__btn"
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

*/
