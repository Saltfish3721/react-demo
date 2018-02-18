import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'

import APP from './APP'
import {reducer} from "./reducers";


const store = createStore(reducer)
store.subscribe(render)
function render() {
    ReactDom.render(
        <APP store={store}/>,
        document.getElementById('root')
    )
}


ReactDom.render(
    <APP store={store}/>,
    document.getElementById('root')
)

