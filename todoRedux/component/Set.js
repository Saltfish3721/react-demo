import React from 'react'
import {setVisibleType} from '../action'

class Set extends React.Component{
    constructor(props){
        super(props)
    }
    changeType(e){
        console.log(e.target.value)
        this.props.store.dispatch(setVisibleType(e.target.value))
        console.log(this.props.store.getState())
    }

    render(){
        return (
            <div>
                <button value='ALL' onClick={this.changeType.bind(this)}>ALl</button>
                <button value='UNCOMPLETED' onClick={this.changeType.bind(this)}>Ok</button>
                <button value='COMPLETED' onClick={this.changeType.bind(this)}>Notfinish</button>
            </div>
        )
    }
}

export default Set