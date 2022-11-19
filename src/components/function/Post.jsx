import React from 'react'
import {Card, Col} from 'react-bootstrap'

const Post = ({title, body}) => {
    return (
        <Col lg={3}>
            <Card className='mb-3' style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
                    <Card.Text>{body}</Card.Text>
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post
