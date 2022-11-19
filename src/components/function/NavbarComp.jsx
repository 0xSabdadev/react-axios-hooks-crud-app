import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../../CartContext'

const NavbarComp = props => {
    const {getValue, setValue} = useContext(CartContext)
    return (
        <Navbar collapseOnSelect expand='lg' bg='light'>
            <Container fluid>
                <Navbar.Brand to='/'>Testi Cuyy</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                        <Link to='/mahasiswa' className='nav-link'>
                            Mahasiswa
                        </Link>
                        <Link to='/kelas' className='nav-link'>
                            Kelas
                        </Link>
                        <Link to='/hooks' className='nav-link'>
                            Use State
                        </Link>
                        <Link to='/hooksEffects' className='nav-link'>
                            Use Effect
                        </Link>
                        <Link to='/produk' className='nav-link'>
                            Produk
                        </Link>
                        <Link to='/hooksReducer' className='nav-link'>
                            Use Reducer
                        </Link>
                    </Nav>
                    <Nav>
                        <Button>
                            <i className='fa fa-cart-shopping'></i>
                            <Button className='ms-1 badge bg-danger'>{getValue}</Button>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
