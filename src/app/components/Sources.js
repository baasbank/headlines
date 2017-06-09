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
    
   // <a href={`/headlines/?sourceId=${source.id}&sortBy=${sortBy}`}>
    return (
      
      <div>
        <h1>News Sources</h1>
        {/*<ul>{sourceComponent}</ul>*/}
        <ul>
          {
            sourcesList.map((source) => {
              //console.log(source.sortBysAvailable);
              return (
                <div key={source.id}>
                  {source.name}
                  {/*{source.sortBysAvailable.length === 1 ? (<p onClick={() => getData(source.sortBysAvailable[0], source.id)}>{source.sortBysAvailable[0]}</p>) : 
                    (source.sortBysAvailable.map((data, i) => <p key={i} onClick={() => getData(data, source.id)}>{data}</p>))
                  }*/}
                  {source.sortBysAvailable.map((sortBy) => {
                    // console.log({sortBy});
                    return (
                      <div key={sortBy}>
                        <a href=''>
                          <p>{sortBy}</p>
                        </a>  
                      </div>
                    )
                    }
                  )
                  }
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }
  }

{/*<p className="title" key={index}>{info.description}</p>
                  {sortBy.map((options, index) => (
                    <p key={index}>
                      <a
                        href={`#/headline?source=${info.id}&name=${info.name}
                        &sortBy=${options}`}
                      >
                        {options} news
                      </a>
                    </p>
                  ))}*/}