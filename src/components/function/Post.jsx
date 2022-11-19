import React from 'react'
import {Card, Col, Button} from 'react-bootstrap'

const Post = ({datas, remove}) => {
    return (
        <Col lg={3}>
            <Card className='mb-3' style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{datas.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
                    <Card.Text>{datas.body}</Card.Text>
                    <Button className='btn-danger' type='button' onClick={() => remove(datas.id)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post
