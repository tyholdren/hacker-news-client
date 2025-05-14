import { ReactComponent as YoutubeIcon } from '../../static/icons/YoutubeIcon.svg';
import { ReactComponent as FacebookIcon } from '../../static/icons/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../static/icons/InstagramIcon.svg';
import { ReactComponent as GithubIcon } from '../../static/icons/GithubIcon.svg';
import { ReactComponent as TwitterIcon } from '../../static/icons/TwitterIcon.svg';

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
