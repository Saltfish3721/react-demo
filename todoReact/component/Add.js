import React from 'react'

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }
    onSubmit(inputvalue){
        if(!this.state.inputValue){return}
        this.props.onSubmit(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }
    changeInput(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input onChange={this.changeInput.bind(this)} value={this.state.inputValue}/>
                <button type="submit" onClick={this.onSubmit.bind(this)}>AddTodo</button>
            </div>
        )
    }
}

export default Add