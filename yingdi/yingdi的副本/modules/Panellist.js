import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Panel from './Panel'

 
export default class Panellist extends React.Component {
    constructor(props) {
        super(props);
        console.log("Panellist")
        console.log(props)
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
        var url = `http://www.iyingdi.cn/feed/list/seed?&web=1&seed=${seed}&system=web`
        console.log(url)
        axios.get(url)
            .then(res => {
                var feeds = res.data.feeds
                this.setState({
                    feeds:feeds
                })
            });
    }
    
    render() {
        var panellist = []
        for(let i=0;i<this.state["feeds"].length;i++){
            var panel = <Panel data={this.state["feeds"][i]["feed"]} key={i.toString()}/>
            panellist.push(panel)
        }
        console.log(panellist)
        return (
                <div>
                    {panellist}
                </div>
        );
    }


}

