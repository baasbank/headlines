import React from 'react';

import getSourcesfromActions from '../actions/Actions';
import sourcesStore from '../stores/SourcesStore';


export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
    };
  }

  componentWillMount() {
    getSourcesfromActions();
    sourcesStore.on('change', () => (
      this.setState({
        sources: sourcesStore.getSources()
      })
    )
  );
  }

  render() {
    const sources = this.state.sources.sources;
    const sourcesList = (sources === undefined) ? [] : sources;
    return (
      <div>
        <h1>News Sources</h1>
        <ul>
          {
            sourcesList.map(source =>
              (
                <div key={source.id}>
                  {source.name}
                  {source.sortBysAvailable.map(sortBy => (
                          <div key={sortBy}>
                            <a href={`#/articles/${source.id}/${sortBy}`}>
                              {sortBy}
                            </a>
                          </div>
                      ))
                  }
                </div>
              )
            )
          }
        </ul>
      </div>
    );
  }
  }

