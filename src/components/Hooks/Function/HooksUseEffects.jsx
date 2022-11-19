import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Button, Table, Container, NavLink, Alert, Col, Row} from 'react-bootstrap'

const api = 'http://localhost:3001'

export default function HooksUseEffects() {
    const [mahasiswa, setMahasiswa] = useState([])
    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })
    }, [])
    return (
        <Container>
            <h2>Data Mahasiswa</h2>
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
                    {mahasiswa.map(mhs => (
                        <tr key={mhs.id_mahasiswa}>
                            <td>{mhs.nim}</td>
                            <td>{mhs.nama}</td>
                            <td>{mhs.jurusan}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
