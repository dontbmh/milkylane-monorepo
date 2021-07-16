import api from '.';
import { queries } from '@milkylane/graphql';

(async () => {
  api.configure();

  try {
    const res = await api.query({
      query: queries.syncRestaurants,
      variables: {
        input: {
          filter: 'ASDF',
        },
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();
