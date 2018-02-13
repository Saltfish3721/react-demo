import React from 'react';
import ReactDOM from 'react-dom';

import Panellist from './Panellist'

 
export default class Seedname extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seedname:this.props.params.seedname
        };
    }
    
    render() {
        //无法通过路由修改内容，应为AJAX是在componentDidMount阶段进行的
         return (
            <div>
                <Panellist seedname={this.state.seedname}/>
            </div>
         )
    }
}
