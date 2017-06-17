import React from 'react';

import { getSourcesfromActions } from '../actions/Actions';
import sourcesStore from '../stores/SourcesStore';

/**
 * Class for the sources component on which the 
 * news sources are rendered.
 * @class Sources
 * @extends React.Component
 */

class Sources extends React.Component {

  /**
   * @constructor Sources
  */


  constructor() {
    super();

    /**
     * Initializing state of sources to an empty array,
     *  and state of search to an empty string.
     */


    this.state = {
      sources: [],
      search: ''
    };
  }

/**
* When the component mounts, the getSourcesfromActions
* function is called.
* The sources Store listens for the 'change' event,
* then calls the 'getSources' method that sends the
* sources to the component.
*/

  componentDidMount() {
    getSourcesfromActions();
    sourcesStore.on('change', () => (
      this.setState({
        sources: sourcesStore.getSources()
      })
    )
  );
}

/**
 * When the component unmounts, remove the 'change' event
 * to prevent memory leaks.
 */

  componentWillUnmount() {
    sourcesStore.removeListener('change', this.getSources);
  }

/**
 * This function is used to search for news sources.
 * @param {string}
 */

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }
  render() {
    const sources = this.state.sources.sources;
    const sourcesList = (sources === undefined) ? [] : sources;

    const filteredSources = sourcesList.filter(
      source => source.name.toLowerCase().indexOf(
      this.state.search.toLowerCase()) !== -1);
    return (
      <div className="container">
        <h3 id="selectnews">Select A News Source</h3>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control searchSource" placeholder="Search for a source" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="sources">
            {
              filteredSources.map(source =>
                (
                  <div id="" className="row" key={source.id}>
                    <div className="col-sm-7">
                      <p><strong>{source.name}</strong></p>
                      <p>{source.description}</p>
                    </div>
                    <div className="col-sm-5 col-btn">
                      {source.sortBysAvailable.map(sortBy => (
                          <a className="btn btn-primary news-btn" key={sortBy}
                          href={`#/articles/${source.id}/${sortBy}`}>
                            {sortBy} news
                          </a>
                        ))
                      }
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    );
  }
  }

export default Sources;
