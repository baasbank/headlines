import React from 'react';

import getSourcesfromActions from '../actions/Actions';
import sourcesStore from '../stores/SourcesStore';


export default class Sources extends React.Component {
  constructor() {
    super();
    this.handleSignOut = this.handleSignOut.bind(this);
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

handleSignOut() {
  localStorage.removeItem('authenticated');
  this.props.router.push('/login');
}


  render() {
    const sources = this.state.sources.sources;
    const sourcesList = (sources === undefined) ? [] : sources;
    return (
      <div>
        <h1>News Sources</h1>
        <button onClick={this.handleSignOut}>Sign Out</button>
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

