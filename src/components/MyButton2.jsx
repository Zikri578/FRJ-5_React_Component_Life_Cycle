import React, { useState, useEffect } from "react";

export default function MyButton2() {

    const [kurang, setKurang] = useState(1);
    // const [kurang, setKurang] = useState(100);

    const increment = () => {
        setKurang(kurang + 1)
    };

    // const decrement = () => {
    //     setKurang(kurang - 1);
    // }

    // Komponent did mount
    useEffect(() => {
        console.info("MyButton2 di Mounting ke halaman Browser!");

        // Komponen will UnMount
        return () => {
            console.info("MyButton2 di hapus");
        }
    }, []);

    // Komponent did update
    useEffect(() => {
        console.info("MyButton2 di update", kurang);
    }, [kurang])

    // // Komponent did Hapus
    // useEffect(() => {
    //     console.info("MyButton2 di hapus", tambah);
    // }, [kurang]);

    return (
        <button onClick={increment}>Coba di Pencet!</button>
    )

} 