import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
  
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="asd.html"><h3 >{this.props.data["title"]}</h3></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <img src={this.props["data"]["icon"]} className="img-responsive">
                            </img>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <p>{this.props["data"]["description"]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="fixed-bottom">
                        <div className="col-md-2 col-md-offset-8">
                            <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{props["data"]["author"]}</p>
                        </div>
                        <div className="col-md-2">
                            time
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default React.createClass({
  render() {
    return <Panel/>
  }
})