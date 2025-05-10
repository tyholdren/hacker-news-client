import { ReactComponent as HomeIcon } from '../src/static/icons/HomeIcon.svg';

const ID_BASE_START = 'https://hacker-news.firebaseio.com/v0/';
const ID_BASE_END = '.json?print=pretty';

const NEW_STORIES_IDS = `${ID_BASE_START}newstories${ID_BASE_END}`;
const ASK_STORIES_IDS = `${ID_BASE_START}askstories${ID_BASE_END}`;
const SHOW_STORIES_IDS = `${ID_BASE_START}showstories${ID_BASE_END}`;
const JOB_STORIES_IDS = `${ID_BASE_START}jobstories${ID_BASE_END}`;

const URL_BASE = 'https://hacker-news.firebaseio.com/v0/item/';

export const VIEWS = {
  OVERVIEW: 'overview',
  DETAIL_VIEW: 'detail_view',
};

export const TABS = {
  NEW: {
    id: 0,
    icon: <HomeIcon />,
    value: 'NEW',
    HEADER: 'New',
    SUB_HEADER: 'Discover the latest submissions in the Hacker New community.',
    ids: NEW_STORIES_IDS,
    url: URL_BASE,
  },
  ASK: {
    id: 1,
    icon: <HomeIcon />,
    value: 'ASK',
    HEADER: 'Ask',
    SUB_HEADER:
      'Explore community-driven Q&A where users seek insights and advice',
    ids: ASK_STORIES_IDS,
    url: URL_BASE,
  },
  SHOW: {
    id: 2,
    icon: <HomeIcon />,
    value: 'SHOW',
    HEADER: 'Show',
    SUB_HEADER:
      'Showcase your projects, products, and discoveries to the Hacker News audience',
    ids: SHOW_STORIES_IDS,
    url: URL_BASE,
  },
  JOBS: {
    id: 3,
    icon: <HomeIcon />,
    value: 'JOBS',
    HEADER: 'Jobs',
    SUB_HEADER:
      'Connect with top tech job opportunities an company hiring posts.',
    ids: JOB_STORIES_IDS,
    url: URL_BASE,
  },
};
