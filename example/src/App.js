import React, { Component } from 'react';

import { SearchInputDemo } from './SearchInputDemo';
import { ExternalStateInputDemo } from './ExternalStateInputDemo';
import EventBusDemo from './EventBusDemo';
import { MemorizedValueDemo } from './MemorizedValueDemo';

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
        <hr />
        <h1> useMemorizedValue demo</h1>
        <MemorizedValueDemo />
      </div>
    );
  }
}
