import React from 'react';

import { getSourcesfromActions } from '../actions/Actions';
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
      <div className="container">
        <h3 id="selectnews">Select A News Source</h3>
        <button className="btn-default btn-lg signout" onClick={this.handleSignOut}>
          Sign Out</button>
          {
            sourcesList.map(source =>
              (
                <div id="" className="row" key={source.id}>
                  <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-8">
                      <p><strong>{source.name}</strong></p>
                      <p>{source.description}</p>
                    </div>
                    {source.sortBysAvailable.map(sortBy => (
                        <div className="col-sm-1" key={sortBy}>
                          <ul className="list-group my-list-group">
                            <li className="">
                              <a className="btn btn-primary"
                              href={`#/articles/${source.id}/${sortBy}`}>
                                {sortBy}
                              </a>
                            </li>
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            )
          }
      </div>
    );
  }
  }

