import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Panel from './Panel'

 

class Panellist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
        };
    }
    componentDidMount() {
        var s = {
                hearthstone:2,
                mtg:3
            }
        var seed = s[this.props.seedname]
        var url = `http://www.iyingdi.cn/feed/list/seed?&web=1&seed=2&system=web`
        axios.get(url)
            .then(res => {
                
                var feeds = res.data.feeds
           
                this.setState({
                    feeds:feeds
                })

            });
    }

    getPanellist(){
        var panellist = []
        for(let i=0;i<this.state["feeds"].length;i++){
            var panel = <Panel data={this.state["feeds"][i]["feed"]} key={i.toString()}/>
            panellist.push(panel)
        }
        console.log(panellist)
        return panellist
    }
    render() {
        return (
                <div>
                    {this.getPanellist()}
                </div>
        );
    }
}

export default React.createClass({
  render() {
    return <Panellist/>
  }
})