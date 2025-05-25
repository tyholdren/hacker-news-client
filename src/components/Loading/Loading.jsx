import './Loading.css';
import { LoadingIcon } from '@icons';
// NOTE: UPDATE STYLING HERE TO CSS FILE
// AND ALSO CENTER IN THE PAGE
export default function Loading() {
  return (
    <div className="loading-alert">
      <LoadingIcon />
      <div className="alert-container">
        <h3 className="header">{'Loading...'}</h3>
        <span className="desc">{"Almost there! We're setting"}</span>
        <span className="desc">{'everything up for you.'}</span>
      </div>
    </div>
  );
}
