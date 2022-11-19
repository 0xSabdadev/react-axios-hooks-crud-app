import logo from './logo.svg'
import './App.css'
// import Home from './components/function/Home'
// import Beranda from './components/class/Beranda'
// import Blog from './components/function/Blog'
// import Produk from './components/class/Produk'
import Parent from './components/class/Parent'
import {Row, Col, Card, Container} from 'react-bootstrap'
import NavbarComp from './components/function/NavbarComp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/function/HomePage'
import AboutPage from './components/function/AboutPage'
import DetailComp from './components/function/DetailComp'
import ListComp from './components/class/ListComp'
import TambahComp from './components/class/TambahComp'
import EditComp from './components/class/EditComp'
import KelasComp from './components/Hooks/Class/KelasComp'
import HooksComp from './components/Hooks/Function/HooksComp'
import HooksUseEffects from './components/Hooks/Function/HooksUseEffects'
import {CartContext} from './CartContext'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import {getValue} from '@testing-library/user-event/dist/utils'
import ProductComp from './components/Hooks/Function/ProductComp'
import HooksReducer from './components/Hooks/Function/HooksReducer'
import {createContext} from 'react'
import {useReducer} from 'react'
import Tagihan from './components/Hooks/Function/Tagihan'
import BlogPost from './components/class/BlogPost'

//create context
export const keranjangContext = createContext()

//data buat reducer
const initialStaTe = {
    jumlah: 1,
    hargaSatuan: 10000,
    hargaTotal: 10000,
    disabled: true,
}

//uat reducre
const reducer = (state, action) => {
    switch (action) {
        case 'plus':
            return {
                ...state,
                jumlah: state.jumlah + 1,
                hargaTotal: state.hargaSatuan + state.hargaSatuan * state.jumlah,
                disabled: false,
            }
        case 'minus':
            if (state.jumlah == 2) {
                return {
                    ...state,
                    jumlah: state.jumlah - 1,
                    hargaTotal: state.hargaSatuan * state.jumlah - state.hargaSatuan,
                    disabled: true,
                }
            }
            return {
                ...state,
                jumlah: state.jumlah - 1,
                hargaTotal: state.hargaSatuan * state.jumlah - state.hargaSatuan,
                disabled: false,
            }
        default:
            return state
    }
}

const App = () => {
    const [getValue, setValue] = useState(0)
    //pake recuder
    const [count, dispatch] = useReducer(reducer, initialStaTe)
    return (
        <BrowserRouter>
            <CartContext.Provider value={{getValue, setValue}}>
                <NavbarComp />
                <keranjangContext.Provider
                    value={{keranjangState: count, keranjangDispatch: dispatch}}>
                    {/* boleh aja lgsg value={{count,dispatch}} */}
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/detail/:id' element={<DetailComp />} />
                        <Route path='/mahasiswa' element={<ListComp />} />
                        <Route path='/mahasiswa/add' element={<TambahComp />} />
                        <Route path='/mahasiswa/edit' element={<EditComp />} />
                        <Route path='/kelas' element={<KelasComp />} />
                        <Route path='/hooks' element={<HooksComp />} />
                        <Route path='/hooksEffects' element={<HooksUseEffects />} />
                        <Route path='/produk' element={<ProductComp />} />
                        <Route path='/hooksReducer' element={<HooksReducer />} />
                        <Route path='/tagihan' element={<Tagihan />} />
                        <Route path='//statefulAxios' element={<BlogPost />} />
                    </Routes>
                </keranjangContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    )
}

export default App
