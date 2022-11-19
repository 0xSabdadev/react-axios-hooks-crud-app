import React from 'react'
import Produk from '../class/Produk'
import Blog from './Blog'

const Home = () => {
    return (
        <div>
            <Produk nama='Macbook Pro 2020' stock='10' harga='13000000' />
            <Produk nama='Macbook Pro 2021' stock='22' harga='29000000' />
            <Produk nama='Macbook Pro 2022' stock='40' harga='41000000' />
            <Produk nama='Lenovo Pro 2020' stock='32' harga='16000000' />
            <Produk nama='MiPad Pro 2020' stock='55' harga='33000000' />
            <Produk nama='MiBook Pro 2020' stock='13' harga='43000000' />
        </div>
    )
}

export default Home
