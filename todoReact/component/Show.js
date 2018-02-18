import React from 'react'



class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {
                    this.props.list.map(i=>{
                        switch(this.props.type) {
                            case "A":
                                return !i.completed ? <li key={i.text}>{i.text}</li> : <li key={i.text} ><strike>{i.text}</strike></li>
                            case "C":
                                return !i.completed ? <li key={i.text}>{i.text}</li> : null
                            case "B":
                                return !i.completed ? null : <li key={i.text}><strike>{i.text}</strike></li>
                        }})
                }
            </div>
        )
    }
}

export default Show