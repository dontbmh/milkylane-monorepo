import api from '.';
import * as queries from './graphql/queries';

(async () => {
  api.configure();

  try {
    const res = await api.query({
      query: queries.lsAuth,
      variables: {
        input: {
          appId: 'ASDF',
          secret: 'asdf',
        },
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }


})();
