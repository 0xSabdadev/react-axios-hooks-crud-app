import React, {Component, Fragment} from 'react'
import axios from 'axios'
import Post from '../function/Post'
import {Col, Row} from 'react-bootstrap'

export default class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
        }
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({
        //             post: json,
        //         })
        //     })
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                post: res.data,
            })
        })
    }
    render() {
        return (
            <Fragment>
                <h2 className='px-lg-5 mb-5 mt-3'>Blog Post</h2>
                <Row className='px-lg-5'>
                    {this.state.post.map(data => {
                        return <Post key={data.id} title={data.title} body={data.body} />
                    })}
                </Row>
            </Fragment>
        )
    }
}
