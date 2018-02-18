import React from 'react'

class Set extends React.Component{
    constructor(props){
        super(props)
    }
    changeType(e){
        console.log(e.target.value)
        this.props.onSubmit(e.target.value)
    }
    render(){
        return (
            <div>
                <button value='A' onClick={this.changeType.bind(this)}>ALl</button>
                <button value='B' onClick={this.changeType.bind(this)}>Ok</button>
                <button value='C' onClick={this.changeType.bind(this)}>Notfinish</button>
            </div>
        )
    }
}

export default Set