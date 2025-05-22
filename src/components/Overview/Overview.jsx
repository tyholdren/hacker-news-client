import './Overview.css';

import { ListItem, Loading } from '@components';
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
  console.log('IDS:', ids, 'IDS.LENGTH', ids.length, 'START INDEX', startIndex);
  // NOTE: add different styling for the disabled more button, logic is correct

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
        className="load-more-btn"
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
