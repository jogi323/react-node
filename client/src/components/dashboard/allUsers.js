import React, { Component } from 'react';
import {withRouter} from 'react-router';

class AllUsers extends Component {
  render() {
    return (
      <div>
        <h2>All users list:</h2>
      </div>
    )
  }
}

export default withRouter(AllUsers);
