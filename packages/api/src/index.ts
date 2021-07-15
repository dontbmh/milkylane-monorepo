import { config } from '@milkylane/graphql';
import Amplify from 'aws-amplify';
import query from './query';
import * as auth from './auth';
import * as dish from './dish';
import * as menu from './menu';
import * as restaurant from './restaurant';

const configure = (options?: Partial<typeof config>) =>
  Amplify.configure({ ...config, ...options });

export default { configure, query, ...auth, ...dish, ...menu, ...restaurant };
