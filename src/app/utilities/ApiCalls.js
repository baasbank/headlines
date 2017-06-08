
import axios from 'axios';

const getNewsSources = url => axios.get(url)
		.then(source => source.data.sources);

const getHeadlines = url => axios.get(url)
		.then(source => source.data.articles);

export default {getNewsSources, getHeadlines};

