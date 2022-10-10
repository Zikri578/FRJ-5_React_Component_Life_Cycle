import React from "react";


export default class MyButton extends React.Component {
    constructor(props) {
        super(props)

        // State
        this.state = {
            tambah: 1,
            kurang: 100
        }

        // Function untuk increment state jumlah
        this.increment = () => {
            this.setState({
                tambah: this.state.tambah + 1
            })
        }

        // this.decrement = () => {
        //     this.setState({
        //         kurang: this.state.kurang - 1
        //     })
        // }
    }

    // Component did Mount
    componentDidMount() {
        console.info("Tombol di Mounting ke halaman Browser!");
    }

    // Component di update
    componentDidUpdate() {
        console.info("Tombol sudah di update", this.state.tambah);
    }

    // Component will unMount
    componentWillUnmount() {
        console.info("Tombol sudah dihapus");
    }

    // Mengembalikan nilai constructor
    render() {
        return (
            <button onClick={this.increment}> Tambah {this.state.tambah}</button>
            //<button onClick={this.decrement}> Kurang {this.state.kurang} </button>
        )
    }
}