import { ReactComponent as HomeIcon } from '../src/static/icons/HomeIcon.svg';
//import { ReactComponent as HomeIcon } from '../../static/icons/HomeIcon.svg';

const NEW_STORIES_IDS =
  'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

const NEW_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/item/';

const ASK_STORIES_IDS =
  'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
const ASK_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/item/';

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
    url: NEW_STORIES_URL,
  },
  ASK: {
    id: 1,
    icon: <HomeIcon />,
    value: 'ASK',
    HEADER: 'Ask',
    SUB_HEADER:
      'Explore community-driven Q&A where users seek insights and advice',
    ids: ASK_STORIES_IDS,
    url: ASK_STORIES_URL,
  },
  SHOW: {
    id: 2,
    icon: <HomeIcon />,
    value: 'SHOW',
    HEADER: 'Show',
    SUB_HEADER:
      'Showcase your projects, products, and discoveries to the Hacker News audience',
    ids: NEW_STORIES_IDS,
    url: NEW_STORIES_URL,
  },
  JOBS: {
    id: 3,
    icon: <HomeIcon />,
    value: 'JOBS',
    HEADER: 'Jobs',
    SUB_HEADER:
      'Connect with top tech job opportunities an company hiring posts.',
    ids: NEW_STORIES_IDS,
    url: NEW_STORIES_URL,
  },
};
