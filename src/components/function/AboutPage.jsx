import React, {Component} from 'react'
import {Row, Col, Container, Card, Button} from 'react-bootstrap'
import CardComp from './CardComp'
import './css/Blog.css'
import {useContext} from 'react'
import {CartContext} from '../../CartContext'

const AboutPage = () => {
    return (
        <>
            <Card className='cardto bg-grey'>
                <Card.Body>
                    <Card.Title className='fs-1'>About Page</Card.Title>
                    <Card.Text className='mt-4'>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant='primary' className='mt-3'>
                        Go somewhere
                    </Button>
                </Card.Body>
            </Card>
            <Container className='pt-5'>
                <Row>
                    <Col>
                        <CardComp id='1' judul='Belajar React' tanggal='22/06/2022' />
                    </Col>
                    <Col>
                        <CardComp id='2' judul='Belajar Golang' tanggal='22/06/2022' />
                    </Col>
                    <Col>
                        <CardComp id='3' judul='Belajar PHP' tanggal='22/06/2022' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutPage
