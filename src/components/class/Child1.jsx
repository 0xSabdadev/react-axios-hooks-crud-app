import React, {Component} from 'react'
import {Button, Alert} from 'react-bootstrap'

export default class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    jmlBeli = 1
    render() {
        return (
            <div>
                <Alert variant='primary'>Testi Cuyy</Alert>
                <p>Child 1</p>
                <p>{this.props.stock}</p>
                <Button variant='primary' onClick={() => this.props.fungsi(this.jmlBeli)}>
                    Beli
                </Button>{' '}
            </div>
        )
    }
}
