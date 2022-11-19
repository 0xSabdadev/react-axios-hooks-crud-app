import React, {Component} from 'react'
import GrandChild from './GrandChild'

export default class Child2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <p>Child 2</p>
                <p>{this.props.stock}</p>
                <GrandChild stock={this.props.stock} />
            </div>
        )
    }
}
