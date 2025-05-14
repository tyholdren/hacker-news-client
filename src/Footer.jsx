import { ReactComponent as YoutubeIcon } from '../src/static/icons/YoutubeIcon.svg';
import { ReactComponent as FacebookIcon } from '../src/static/icons/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../src/static/icons/InstagramIcon.svg';
import { ReactComponent as GithubIcon } from '../src/static/icons/GithubIcon.svg';
import { ReactComponent as TwitterIcon } from '../src/static/icons/TwitterIcon.svg';

export default function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span>Hacker News, Inc. All rights reserved.</span>
      </div>
      <div>
        <YoutubeIcon />
        <FacebookIcon />
        <InstagramIcon />
        <GithubIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}
