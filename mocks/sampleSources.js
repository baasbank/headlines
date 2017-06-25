const mockdata = {
  status: 'ok',
  data: [
    {
      id: 'the-verge',
      name: 'The Verge',
      description: `The Verge covers the intersection 
      of technology, science, art, and culture.`,
      url: 'http://www.theverge.com',
      category: 'technology',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: [
        'top',
        'latest'
      ]
    },
    {
      id: 'the-wall-street-journal',
      name: 'The Wall Street Journal',
      description: `WSJ online coverage of breaking news and 
      current headlines from the US and around the world. 
      Top stories, photos, videos, detailed analysis and in-depth reporting.`,
      url: 'http://www.wsj.com',
      category: 'business',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: [
        'top'
      ]
    },
  ]
};

export default mockdata;
