import { parseHtmlWithDOMParser } from '../../utils';

export default function DetailView({ detailData }) {
  const { id, text, title, url, author, commentCount, score, time } =
    detailData;

  return (
    <div>
      <h1>{title}</h1>
      <span>{author}</span>
      <span>{score} points</span>
      <span>0 minutes ago</span>
      <span>
        {commentCount} comment{commentCount > 1 ? 's' : ''}
      </span>
      <div>{parseHtmlWithDOMParser(text)}</div>
      <ul>
        {Array(5)
          .fill(null)
          .map((el, index) => {
            return <li>{index}</li>;
          })}
      </ul>
    </div>
  );
}
