import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({
  overviewData,
  setActiveView,
  setDetailData,
}) {
  const { value, desc, posts } = overviewData;

  return (
    <div>
      <h2>{value}</h2>
      <span>{desc}</span>
      {posts ? (
        <>
          <ul>
            {posts.map(
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
          <button>More</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
