import React from 'react';
import ReactDOM from 'react-dom';

import Panellist from './Panellist'


export default React.createClass({
  render() {
    return (
        <div>
            <Panellist seedname={this.props.params.seedname}/>
        </div>
        )
  }
})