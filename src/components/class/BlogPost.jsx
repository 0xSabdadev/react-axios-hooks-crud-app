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
    getApi = () => {
        axios.get('http://localhost:3004/posts').then(res => {
            this.setState({
                post: res.data,
            })
        })
    }
    handleRemove = id => {
        axios.delete(`http://localhost:3004/posts/${id}`).then(res => {
            this.getApi()
        })
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({
        //             post: json,
        //         })
        //     })
        //json-server --watch db.json --port 3004
        this.getApi()
    }
    render() {
        return (
            <Fragment>
                <h2 className='px-lg-5 mb-5 mt-3'>Blog Post</h2>
                <Row className='px-lg-5'>
                    {this.state.post.map(data => {
                        return <Post key={data.id} datas={data} remove={this.handleRemove} />
                    })}
                </Row>
            </Fragment>
        )
    }
}
