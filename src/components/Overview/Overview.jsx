import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({ overviewData, setActiveView }) {
  const { value, desc, content } = overviewData;

  return (
    <div>
      <h2>{value}</h2>
      <span>{desc}</span>
      {content ? (
        <ul>
          {content.map(({ id, title, url, by, descendants, score, time }) => {
            return (
              <ListItem
                key={id}
                id={id}
                title={title}
                url={url}
                author={by}
                commentCount={descendants}
                score={score}
                time={time}
                setActiveView={setActiveView}
              />
            );
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
