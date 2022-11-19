import React, {useContext} from 'react'
import {Button, Card} from 'react-bootstrap'
import {keranjangContext} from '../../../App'

const Tagihan = () => {
    const countContext = useContext(keranjangContext)
    return (
        <Card className='cardto pt-5 pb-5 bg-grey'>
            <Card.Body>
                <Card.Title className='fs-1'>Tagihan</Card.Title>
                <Card.Text className='mt-4'>
                    [{countContext.keranjangState.jumlah}x]. Action Figure Naruto
                </Card.Text>
                <Card.Text>Harga Total : {countContext.keranjangState.hargaTotal}</Card.Text>
                <Button variant='primary' className='mt-3'>
                    Lanjutkan Pembayaran
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Tagihan
