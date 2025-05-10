import { VIEWS } from '../../constants';

export default function ListItem({ id, url, title, setActiveView }) {
  return (
    <li key={id}>
      <button onClick={() => setActiveView(VIEWS.DETAIL_VIEW)}>
        {title}
        <span>{url}</span>
      </button>
    </li>
  );
}
