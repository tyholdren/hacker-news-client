import ListItem from '../ListItem/ListItem.jsx';

export default function Overview({ overviewData, setActiveView }) {
  //<a href={url} target="_blank">
  const { HEADER: header, SUB_HEADER: subHeader, content } = overviewData;

  return (
    <div>
      <h2>{header}</h2>
      <span>{subHeader}</span>
      {content ? (
        <ul>
          {content.map(({ id, title, url, by, descendants, score, time }) => {
            console.log({ content });
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
