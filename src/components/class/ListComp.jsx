import React, {Component} from 'react'
import axios from 'axios'
import qr from 'querystring'
import {Button, Table, Container, NavLink, Alert, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'

const api = 'http://localhost:3001'
export default class ListComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none',
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values,
            })
        })
    }

    DeleteMHS = id => {
        const {mhs} = this.state
        const data = qs.stringify({
            id_mahasiswa: id,
        })

        axios
            .delete(api + '/hapus', {
                data: data,
                //khusus delete, diset headers nya sesuai API
                headers: {'Content-type': 'application/x-www-form-urlencoded'},
            })
            .then(json => {
                if (json.data.status == 200) {
                    this.setState({
                        //jika res berhasil, state response diisi dengan data.values(berhasil/tidak)
                        response: json.data.values,
                        //tampilkan data mhs selain yg ber id terhapus
                        mahasiswa: mhs.filter(mhs => mhs.id_mahasiswa !== id),
                        display: 'block',
                    })
                    //redirect lg ke page mahasiswa
                    this.props.history.push('/mahasiswa')
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block',
                    })
                }
            })
    }
    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                <Alert style={{display: this.state.display}}>{this.state.response}</Alert>
                <NavLink href='/mahasiswa/add'>
                    <Button className='btn-success'>Tambah Data</Button>
                </NavLink>

                <hr />
                <Table striped>
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mhs => (
                            <tr key={mhs.id_mahasiswa}>
                                <td>{mhs.nim}</td>
                                <td>{mhs.nama}</td>
                                <td>{mhs.jurusan}</td>
                                <td>
                                    <Row>
                                        <Col lg='2' md='4'>
                                            <Link
                                                className='text-light'
                                                to={{pathname: '/mahasiswa/edit'}}
                                                state={{
                                                    id_mahasiswa: mhs.id_mahasiswa,
                                                    nim: mhs.nim,
                                                    nama: mhs.nama,
                                                    jurusan: mhs.jurusan,
                                                }}>
                                                <Button className='btn-warning'>Edit</Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Button
                                                className='btn-danger'
                                                onClick={() => this.DeleteMHS(mhs.id_mahasiswa)}>
                                                Delete
                                            </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
