import React from 'react'
import {useContext} from 'react'
import {Card, Col, Button} from 'react-bootstrap'
import {CartContext} from '../../../CartContext'

const RowProduct = () => {
    const {getValue, setValue} = useContext(CartContext)
    return (
        <Col>
            <Card>
                <Card.Img variant='top' src='https://placeimg.com/640/480/tech' />
                <Card.Body>
                    <Card.Title>Lenovo</Card.Title>
                    <Card.Text>Rp12.000.000</Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant='primary' onClick={() => setValue(getValue + 1)}>
                        Tambah Keranjang
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RowProduct
