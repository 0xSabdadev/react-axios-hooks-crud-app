import React, {Component} from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, Alert, Label, Input, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'

const api = 'http://localhost:3001'
export default class TambahComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: 'none',
        }
    }
    // data yg dikirim
    handleChange = e => {
        this.setState({
            //masing2 value yg ada di input dikirim
            [e.target.name]: e.target.value,
        })
    }
    // mengirim data yg dikirim
    Addmhs = () => [
        axios
            .post(
                api + '/tambah',
                qs.stringify({
                    nim: this.state.nim,
                    nama: this.state.nama,
                    jurusan: this.state.jurusan,
                }),
            )
            .then(json => {
                if (json.data.status == 200) {
                    this.setState({
                        //jika res berhasil, state response diisi dengan data.values(berhasil/tidak)
                        response: json.data.values,
                        display: 'block',
                    })
                    console.log(this.state.response)
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block',
                    })
                    console.log(this.state.response)
                }
            }),
    ]
    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert style={{display: this.state.display}}>{this.state.response}</Alert>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>NIM</Form.Label>
                        <Form.Control
                            type='text'
                            name='nim'
                            value={this.state.nim}
                            onChange={this.handleChange}
                            placeholder='Enter NIM'
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicNama'>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control
                            type='text'
                            name='nama'
                            value={this.state.nama}
                            onChange={this.handleChange}
                            placeholder='Enter Nama'
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicJurusan'>
                        <Form.Label>Jurusan</Form.Label>
                        <Form.Control
                            type='text'
                            name='jurusan'
                            value={this.state.jurusan}
                            onChange={this.handleChange}
                            placeholder='Enter Jurusan'
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Check me out' />
                    </Form.Group>
                    <Button variant='primary' type='submit' onClick={this.Addmhs}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
