/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

type FlowString = 'flow' | 'Flow'

export class App extends React.Component {
  render(): ReactElement {
		return (
      <div>Simple React + Babel + Bootstrap + Webpack + {this.typeChecks()}</div>
		);
  }
  typeChecks(): FlowString {
    return 'flow'
  }
  /* fails(): FlowString { */
  /* return 'foo' */
  /* } */
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
