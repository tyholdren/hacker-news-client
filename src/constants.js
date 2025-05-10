import { ReactComponent as HomeIcon } from '../src/static/icons/HomeIcon.svg';

const ID_BASE_START = 'https://hacker-news.firebaseio.com/v0/';
const ID_BASE_END = '.json?print=pretty';

const getIdURL = value => `${ID_BASE_START}${value}${ID_BASE_END}`;

const NEW_STORIES_IDS = getIdURL('newstories');
const ASK_STORIES_IDS = getIdURL('askstories');
const SHOW_STORIES_IDS = getIdURL('showstories');
const JOB_STORIES_IDS = getIdURL('jobstories');

const URL_BASE = 'https://hacker-news.firebaseio.com/v0/item/';

export const VIEWS = {
  OVERVIEW: 'overview',
  DETAIL_VIEW: 'detail_view',
};

export const TABS = {
  NEW: {
    id: 0,
    icon: <HomeIcon />,
    value: 'New',
    desc: 'Discover the latest submissions in the Hacker New community.',
    ids: NEW_STORIES_IDS,
    url: URL_BASE,
  },
  ASK: {
    id: 1,
    icon: <HomeIcon />,
    value: 'Ask',
    desc: 'Explore community-driven Q&A where users seek insights and advice',
    ids: ASK_STORIES_IDS,
    url: URL_BASE,
  },
  SHOW: {
    id: 2,
    icon: <HomeIcon />,
    value: 'Show',
    desc: 'Showcase your projects, products, and discoveries to the Hacker News audience',
    ids: SHOW_STORIES_IDS,
    url: URL_BASE,
  },
  JOBS: {
    id: 3,
    icon: <HomeIcon />,
    value: 'Jobs',
    desc: 'Connect with top tech job opportunities an company hiring posts.',
    ids: JOB_STORIES_IDS,
    url: URL_BASE,
  },
};
