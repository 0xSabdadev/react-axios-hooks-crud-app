import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useLocation} from 'react-router'

function DetailComp(props) {
    const {state} = useLocation()
    return (
        <Card className='cardto pt-5 pb-5 bg-grey'>
            <Card.Body>
                <Card.Title className='fs-1'>{state?.judul}</Card.Title>
                <Card.Text>{state?.tanggal}</Card.Text>
                <Card.Text className='mt-4'>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant='primary' className='mt-3'>
                    Learn
                </Button>
            </Card.Body>
        </Card>
    )
}
export default DetailComp
