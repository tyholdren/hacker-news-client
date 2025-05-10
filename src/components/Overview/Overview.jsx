import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({
  overviewData,
  setActiveView,
  setDetailData,
}) {
  const { value, desc, content } = overviewData;

  return (
    <div>
      <h2>{value}</h2>
      <span>{desc}</span>
      {content ? (
        <ul>
          {content.map(
            ({ id, text, title, url, by, descendants, score, time }) => {
              console.log({ content });
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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
