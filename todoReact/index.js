import React from 'react'
import ReactDom from 'react-dom'

import Add from './component/Add'
import Show from './component/Show'
import Set from './component/Set'

class Index extends React.Component{
    constructor(){
        super()
        this.state={
            type:'A',
            list:[{
                text:"eat",
                completed:true
            }]
        }
    }
    handleSubmitComment (TodoThing){
        this.setState({
            list:[
                ...this.state.list,
                {
                    text:TodoThing,
                    completed:false
                }
            ]
        })
        console.log(this.state)
    }
    handleFilter(type){
        console.log(type)
        this.setState({
            type:type
        })
    }

    render(){
        return (
            <div>
                <Add onSubmit={this.handleSubmitComment.bind(this)}></Add>
                <Show list={this.state.list} type={this.state.type}></Show>
                <Set onSubmit={this.handleFilter.bind(this)} ></Set>
            </div>
        )
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('root')
)