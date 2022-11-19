import React, {useContext} from 'react'
import {useReducer} from 'react'
import {Button, Card, Col, Container, NavLink, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {keranjangContext} from '../../../App'

const HooksReducer = () => {
    const countContext = useContext(keranjangContext)
    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Card>
                        <Card.Img src='https://placeimg.com/640/480/tech'></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <h2>Action FIgure Naruto</h2>
                    <h4>{countContext.keranjangState.jumlah}</h4>
                    <br />
                    <h4>Total Harga : {countContext.keranjangState.hargaTotal}</h4>
                    <br />
                    <h6>Jumlah :</h6>
                    <Row>
                        <Col>
                            <Button
                                className='btn-danger'
                                onClick={() => countContext.keranjangDispatch('minus')}
                                disabled={countContext.keranjangState.disabled}>
                                -
                            </Button>
                        </Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col>
                            <Button onClick={() => countContext.keranjangDispatch('plus')}>
                                +
                            </Button>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <br />
                    <Button>Total Harga : {countContext.keranjangState.hargaTotal}</Button>
                    <hr />
                    <Link to={{pathname: '/tagihan'}}>Tagihan</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HooksReducer
