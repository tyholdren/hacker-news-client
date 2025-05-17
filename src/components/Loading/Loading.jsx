import { LoadingIcon } from '@icons';
// NOTE: UPDATE STYLING HERE TO CSS FILE
// AND ALSO CENTER IN THE PAGE
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
      <h3>{'Loading...'}</h3>
      <span>{"Almost there! We're setting"}</span>
      <span>{'everything up for you.'}</span>
    </div>
  );
}
