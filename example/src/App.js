import React, {Component} from 'react'

import {SearchInputDemo} from "./SearchInputDemo";
import {ExternalStateInputDemo} from "./ExternalStateInputDemo";

export default class App extends Component {
  render(){
    return (
      <div>
        <ExternalStateInputDemo/>
        <hr/>

        <SearchInputDemo/>
      </div>
    )
  }
}
