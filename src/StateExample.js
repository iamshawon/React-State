import React, { Component } from 'react'
import './Style.css'

export default class State extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    // Button Funtions
    handleDecrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div className="allObject">
                <h1>Count: {count}</h1>
                <button onClick={this.handleDecrement} disabled={(count === 0) ? true : false}>-</button>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}

