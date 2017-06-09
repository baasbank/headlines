//  eslint linebreak-style: ["error", "windows"]
/* eslint-env es6*/

import React from 'react';
import * as Actions from '../actions/Actions';

import sourcesStore from '../stores/SourcesStore';

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
       sources: [],
    };
  }

  componentDidMount () {
    Actions.getSourcesfromActions();
    sourcesStore.on('change', () => (
      this.setState({
        sources: sourcesStore.getSources()
      })
    )
  )
}

  render() {
     const  sources  = this.state.sources.sources;

     const sourcesList = (sources === undefined) ? [] : sources;
    //  console.log(sourcesList, "sources here in sources components");

    //  let renderSources = function (){
    //    return sources.map((source) => {
    //     <li key={source.id}><a>{source.name}</a></li>;
    //    })
    //  }
    // const sourceComponent =  sources.map((source) => {
    //   return (
    //    <li key={source.id}><a>{source.name}</a></li>
    //   );
    // })
    
    return (
      <div>
        <h1>News Sources</h1>
        {/*<ul>{sourceComponent}</ul>*/}
        <ul>
          {
            sourcesList.map((source) => {
              return (
                <div key={source.id}>
                  <a href=''>
                    <p>{source.name}</p>
                  </a>
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }
  }
