import React, {useState} from 'react'
import TampilComp from './TampilComp'

export default function HooksComp() {
    //definisi state
    // [nama state,function2 nya]
    //useState (0) = jumlah value nya adalah 0
    const [jumlah, setJumlah] = useState(0)
    const [dataLogin, setDataLogin] = useState({
        username: 'frida',
        token: '123ance',
        isLogin: true,
    })
    let tampil
    if (dataLogin.isLogin) {
        tampil = (
            <TampilComp
                username={dataLogin.username}
                fungsi={setJumlah.bind(this)}
                jumlah={jumlah}
            />
        )
    } else {
        tampil = <TampilComp username='maaf belum login' disabled={true} />
    }
    return <>{tampil}</>
}
