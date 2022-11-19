import React from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, Alert, Label, Input, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import qs from 'querystring'

const api = 'http://localhost:3001'
export default function EditComp2() {
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
                <Button
                    variant='primary'
                    type='submit'
                    onClick={this.editMHS(this.state.id_mahasiswa)}>
                    Update
                </Button>
            </Form>
        </Container>
    )
}
