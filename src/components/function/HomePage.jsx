import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './css/Blog.css'
import {useContext} from 'react'
import {CartContext} from '../../CartContext'

const HomePage = () => {
    return (
        <Card className='cardto pt-5 pb-5 bg-grey'>
            <Card.Body>
                <Card.Title className='fs-1'>Home Page</Card.Title>
                <Card.Text className='mt-4'>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant='primary' className='mt-3'>
                    Go somewhere
                </Button>
            </Card.Body>
        </Card>
    )
}

export default HomePage
