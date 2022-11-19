import React, {Component, Fragment} from 'react'
import axios from 'axios'
import Post from '../function/Post'
import {Col, Row, Form, Button, Card} from 'react-bootstrap'

export default class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            formBlogPost: {
                id: '',
                title: '',
                body: '',
                userId: 1,
            },
        }
    }
    getApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then(res => {
            this.setState({
                post: res.data,
            })
        })
    }
    postDataAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then(
            res => {
                this.getApi()
            },
            err => {
                console.log('Err:', err)
            },
        )
    }
    handleRemove = id => {
        axios.delete(`http://localhost:3004/posts/${id}`).then(res => {
            this.getApi()
        })
    }
    handleFormChange = event => {
        //event target adalah tag html inputan yg ada atribut name dan value
        let formNew = {...this.state.formBlogPost}
        formNew[event.target.name] = event.target.value
        formNew['id'] = new Date().getTime()
        this.setState(
            {
                formBlogPost: formNew,
            },
            () => {
                console.log(this.state.formBlogPost)
            },
        )
    }
    handleSubmit = () => {
        this.postDataAPI()
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
                <h2 className='px-lg-5 mb-3 mt-3'>Update Blog</h2>
                <Row className='px-lg-5 mb-5'>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                        <Form.Label>Tittle</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter tittle'
                                            name='title'
                                            onChange={this.handleFormChange}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlTextarea1'>
                                        <Form.Label>Body</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={4}
                                            placeholder='Enter Body'
                                            name='body'
                                            onChange={this.handleFormChange}
                                        />
                                    </Form.Group>
                                    <Button
                                        variant='primary'
                                        type='button'
                                        onClick={this.handleSubmit}>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h2 className='px-lg-5 mb-3'>Blogs</h2>
                <Row className='px-lg-5'>
                    {this.state.post.map(data => {
                        return <Post key={data.id} datas={data} remove={this.handleRemove} />
                    })}
                </Row>
            </Fragment>
        )
    }
}
