import React from 'react'
import {Container, Row} from 'react-bootstrap'
import RowProduct from './RowProduct'

const ProductComp = () => {
    return (
        <>
            <Container>
                <hr />
                <h2>Produk</h2>
                <Row>
                    <RowProduct />
                    <RowProduct />
                    <RowProduct />
                </Row>
            </Container>
        </>
    )
}

export default ProductComp
