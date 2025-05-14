import { ReactComponent as LoadingIcon } from '../../static/icons/LoadingIcon.svg';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoadingIcon />
      <h3>Loading...</h3>
      <span>Almost there! We're setting</span>
      <span>everything up for you.</span>
    </div>
  );
}
