/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import { EventEmitter } from 'events';
import axios from 'axios';

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = axios.get('https://newsapi.org/v1/sources?language=en')
      .then((response) => {return
        response.data.sources;
        console.log(response);
      });
  }
}

const sourcesStore = new SourcesStore;

export default SourcesStore;
