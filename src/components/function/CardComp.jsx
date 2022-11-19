import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CardComp = props => {
    // const newTo = {
    //     pathname: `/detail/${props.id}`,
    //     state: {
    //         judul: props.judul,
    //         tanggal: props.tanggal,
    //     },
    // }
    // const to = `/detail/${props.id}`
    return (
        <Card style={{width: '24rem'}}>
            <Card.Img variant='top' src='https://placeimg.com/640/480/tech' />
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Card.Text>{props.tanggal}</Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Button variant='primary'>
                    <Link
                        className='text-light'
                        to={{pathname: `/detail/${props.id}`}}
                        state={{judul: props.judul, tanggal: props.tanggal}}>
                        Detail
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}
export default CardComp
