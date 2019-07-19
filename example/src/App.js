import React, { Component } from 'react';

import { SearchInputDemo } from './SearchInputDemo';
import { ExternalStateInputDemo } from './ExternalStateInputDemo';
import EventBusDemo from './EventBusDemo';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>useCompositionInput demo</h1>
        <ExternalStateInputDemo />
        <br />
        <SearchInputDemo />
        <hr />
        <h1> useEventBus demo</h1>
        <EventBusDemo />
      </div>
    );
  }
}
