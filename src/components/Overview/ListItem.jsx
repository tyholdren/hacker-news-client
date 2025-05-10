import { VIEWS } from '../../constants';

export default function ListItem({ id, url, title, toggleActiveView }) {
  return (
    <li key={id}>
      <button onClick={() => toggleActiveView(VIEWS.DETAIL_VIEW)}>
        {title}
        <span>{url}</span>
      </button>
    </li>
  );
}
