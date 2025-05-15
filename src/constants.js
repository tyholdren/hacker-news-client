import {
  AskIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  JobsIcon,
  NewIcon,
  ShowIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@icons';

export const SIZE = 10;
const ID_BASE_START = 'https://hacker-news.firebaseio.com/v0/';
const ID_BASE_END = '.json?print=pretty';

export const getIdURL = value => `${ID_BASE_START}${value}${ID_BASE_END}`;
export const getPostIdUrl = value =>
  `${ID_BASE_START}/item/${value}${ID_BASE_END}`;

const NEW_STORIES_IDS = getIdURL('newstories');
const ASK_STORIES_IDS = getIdURL('askstories');
const SHOW_STORIES_IDS = getIdURL('showstories');
const JOB_STORIES_IDS = getIdURL('jobstories');

export const URL_BASE = 'https://hacker-news.firebaseio.com/v0/item/';

export const VIEWS = {
  OVERVIEW: 'overview',
  DETAIL_VIEW: 'detail_view',
};

export const TABS = {
  NEW: {
    id: 0,
    icon: <NewIcon />,
    value: 'New',
    desc: 'Discover the latest submissions in the Hacker New community.',
    ids: NEW_STORIES_IDS,
  },
  ASK: {
    id: 1,
    icon: <AskIcon />,
    value: 'Ask',
    desc: 'Explore community-driven Q&A where users seek insights and advice',
    ids: ASK_STORIES_IDS,
  },
  SHOW: {
    id: 2,
    icon: <ShowIcon />,
    value: 'Show',
    desc: 'Showcase your projects, products, and discoveries to the Hacker News audience',
    ids: SHOW_STORIES_IDS,
  },
  JOBS: {
    id: 3,
    icon: <JobsIcon />,
    value: 'Jobs',
    desc: 'Connect with top tech job opportunities an company hiring posts.',
    ids: JOB_STORIES_IDS,
  },
};

export const footerData = {
  content: '© Hacker News, Inc. All rights reserved.',
  links: [
    <YoutubeIcon key={'YoutubeIcon'} />,
    <FacebookIcon key={'FacebookIcon'} />,
    <InstagramIcon key={'InstagramIcon'} />,
    <GithubIcon key={'GithubIcon'} />,
    <TwitterIcon key={'TwitterIcon'} />,
  ],
};
