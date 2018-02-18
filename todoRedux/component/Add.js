import React from 'react'

import {addTodo} from "../action";

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }

    changeInput(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    buttonSubmit(){
        this.props.store.dispatch(addTodo(this.state.inputValue))
        this.setState({
            inputValue:''
        })
    }
    render(){
        let store = this.props.store
        return (
            <div>
                <input onChange={this.changeInput.bind(this)} value={this.state.inputValue}/>
                <button type="submit" onClick={this.buttonSubmit.bind(this)}>AddTodo</button>
            </div>
        )
    }
}

export default Add