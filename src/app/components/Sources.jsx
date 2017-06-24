import React from 'react';

import { fetchSources } from '../actions/Actions';
import sourcesStore from '../stores/SourcesStore';

/**
 * Class for the sources component on which the news sources are rendered.
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
      error: '',
      sources: [],
      search: ''
    };
    this.recieveSources = this.recieveSources.bind(this);
    this.recieveError = this.recieveError.bind(this);
  }

/**
*calls the 'getSources' method that sends the
* sources to the component.
*/

  componentDidMount() {
    fetchSources();
    sourcesStore.on('change', this.recieveSources);
    sourcesStore.on('error', this.recieveError);
  }

/**
 * preventing  memory leaks.
 */

  componentWillUnmount() {
    sourcesStore.removeListener('change', this.recieveSources);
    sourcesStore.removeListener('error', this.recieveError);
  }

  recieveSources() {
    this.setState({
      sources: sourcesStore.getSources()
    });
  }

  recieveError() {
    this.setState({
      error: sourcesStore.getError()
    });
  }

/**
 * Search for news sources.
 * @param {string} searchTerm - source to search for
*/
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  render() {
    const error = this.state.error;
    const sources = this.state.sources.sources;
    const sourcesList = (sources === undefined) ? [] : sources;

    const filteredSources = sourcesList.filter(
      source => source.name.toLowerCase().indexOf(
      this.state.search.toLowerCase()) !== -1);
    return (
      <span>
        {
          error ?
           <div className="container error">
             <h4>Oops! An error occurred.</h4>
             <p> Check your internet connection and refresh this page. </p>
             </div> :
           <div className="container">
           <h3 id="selectnews">Select A News Source</h3>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control searchSource"
            placeholder="Search for a source" value={this.state.search} 
            onChange={this.updateSearch.bind(this)}/>
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
        }
      </span>
    );
  }
  }

export default Sources;
