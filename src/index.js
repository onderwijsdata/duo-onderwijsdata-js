import jsonld from 'jsonld';
import axios from 'axios';
import yup from 'yup';

import { DUO_VO_VESTIGING_CONTEXT, DUO_VO_VESTIGING_BEZOEKADRES,
         DUO_VO_VESTIGING_CORRESPONDENTIEADRES, VOVestigingSchema } from './schemas';

// Use the jsonld promise-based API since it works nicely with await/async
const promises = jsonld.promises;

const DUO_API_BASE_URL = "https://api.duo.nl/v0/"
const DUO_ENDPOINT_VO_VESTIGINGEN = '/datasets/02.-alle-vestigingen-vo/search';


export default class DUOApiClient {
  constructor(baseURL = DUO_API_BASE_URL, user = null, passwd = null) {
    // Clean the final slash from baseURL if it is appended
    this.baseURL = baseURL.replace(/(\/)+$/, '');

    // Create instance
    this.axios = axios.create({
      baseURL: this.baseURL,
      responseType: 'json',
    });

    // HTTP basic auth
    if (user && passwd) {
      this.axios.defaults.auth = {
        username: user,
        password: passwd,
      };
    }

    // And set up XML body for post
    this.axios.defaults.headers = {
      common: { Accept: 'application/ld+json,application/json,*/*;q=0.1' },
    };
  }

  async getVoVestigingen({ brin, plaats } = {}) {
    const params = {};
    if (brin) {
      params.brin = brin;
    }
    if (plaats) {
      params.plaatsnaam = plaats;
    }

    const res = await this.axios.get(DUO_ENDPOINT_VO_VESTIGINGEN, {
      params
    });

    const { results } = await promises.compact(res.data, DUO_VO_VESTIGING_CONTEXT);

    if (!results) {
      return [];
    }

    return Promise.all(results.map(async res => {
      const bezoekadres = await promises.compact(res, DUO_VO_VESTIGING_BEZOEKADRES);
      const correspondentieadres = await promises.compact(res, DUO_VO_VESTIGING_CORRESPONDENTIEADRES);

      const school = {
        ...res,
        bezoekadres,
        correspondentieadres,
      };

      return VOVestigingSchema.validate(school, { stripUnknown: true });
    }));
  }
}
