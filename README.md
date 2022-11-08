# FRJ-5_Component_Life_Cycle
 Apa itu Component Life Cycle?
 - <b>Component Life cycle</b> adalah siklus hidup yang ada pada React JS. Di dalam Component Life Cycle terdapat tiga fase yaitu : 
    1. Mounting merupakan component yang dibuat dan mulai ditambahkan ke DOM.
    2. Updating merupakan component yang render ulang karena perubahan props dan state 
    3. Unmounting merupakan component yang di hapus dari DOM
    
    Sumber : https://devsaurus.com/react-lifecycle
    
    Contoh penggunaan Component Life Cycle yaitu : 
    
        //letak folder : component/MyButton.jsx
        import React from 'react'
        
        //merupakan component yang bernama MyButton untuk mendefinisikan sebuah kelas komponen React
        export default class MyButton extends React.Component {
        
          //membuat sebuah constructor dengan diisi props
          constructor(props) {
            super(props)
            
            //membuat function state
            this.state = {
              tambah: 1
            }
            
            //membuat function increment state untuk menambah
            this.increment = () => {
              this.setState({
                tambah : this.state.tambah + 1
              })
            }

          }
                       
          //membuat component did mount
          componentDidMount(){
            console.info("Tombol sudah ditambah")
          }

          //membuat component did update
          componentDidUpdate(){
            console.info("Tombol sudah di update", this.state.tambah)
          }

          //membuat component um mount
          componentWillUnmount(){
            console.info("Tombol sudah dihapus")
          }

          //mengembalikan nilai constructor serta bagian JSX
          render() {
            return(
              <button onClick={this.increment}>Tambah {this.state.tambah}</button>    
            )
          }
          
        }
        
        
    
  
  
