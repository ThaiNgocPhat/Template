import React, { Component} from 'react'

class State_classComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'state',
            age: 25
        }
    }
    render(){
    return(
        <div>
            <p>hello</p>
            <div>
                hello my state name, my name is {this.state.name}
            </div>
            <div>
                hello my state age, my age is {this.state.age}
            </div>
            </div>

    )
        }
    }
export default State_classComponent;