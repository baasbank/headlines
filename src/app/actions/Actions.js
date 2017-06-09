import Dispatcher from '../dispatcher/Dispatcher';
// import * as ApiCalls from '../utilities/ApiCalls'
import axios from 'axios';

 export function getSourcesfromActions(){
		return axios.get('https://newsapi.org/v1/sources?language=en')
			.then(sources => Dispatcher.dispatch({
				type: "RECIEVE_SOURCES",
				sources: sources.data,
			}))
			.catch((message) => {
        Dispatcher.dispatch({
				type: "RECIEVE_SOURCES_ERROR",
				message,
			})
      });
}
