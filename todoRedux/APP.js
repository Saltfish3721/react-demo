import React from 'react'

import Add from './component/Add'
import Show from './component/Show'
import Set from './component/Set'


class APP extends React.Component{
    constructor(){
        super()
    }

    render(){
        let storeState = this.props.store.getState()
        return (
            <div>
                <Add store={this.props.store}/>
                <Show store={this.props.store}/>
                <Set store={this.props.store}/>
            </div>
        )
    }
}

export default APP
