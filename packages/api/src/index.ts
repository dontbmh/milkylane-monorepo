import query from './query';
import * as auth from './auth';
import * as dish from './dish';
import * as menu from './menu';
import * as restaurant from './restaurant';
import config from './aws-exports';
import Amplify from 'aws-amplify';

const configure = (options?: Partial<typeof config>) =>
  Amplify.configure({ ...config, ...options });

export default { configure, query, ...auth, ...dish, ...menu, ...restaurant };
