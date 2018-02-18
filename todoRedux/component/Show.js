import React from 'react'



class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let storeState = this.props.store.getState()
        return (
            <div>
                {
                    storeState.todos.map(i=>{
                        switch(storeState.visibleType) {
                            case "ALL":
                                return i.completed ? <li key={i.text} ><strike>{i.text}</strike></li>:<li key={i.text}>{i.text}</li>
                            case "COMPLETED":
                                return i.completed ? <li key={i.text}><strike>{i.text}</strike></li>: null
                            case "UNCOMPLETED":
                                return i.completed ? null : <li key={i.text}>{i.text}</li>
                        }})
                }
            </div>
        )
    }
}

export default Show