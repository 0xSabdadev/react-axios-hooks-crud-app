import React from 'react'

export default function TampilComp(props) {
    return (
        <>
            <p>Hallo,{props.username} </p>
            <h1>{props.jumlah}</h1>
            <button onClick={() => props.fungsi(props.jumlah + 1)} disabled={props.disabled}>
                Tambah
            </button>
        </>
    )
}
