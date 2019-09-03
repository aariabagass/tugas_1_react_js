import React, { Component } from 'react';
import Menuu from "./page/MenuUtama.js"
import Menup from "./page/MenuProduct.js"
import Menuk from "./page/MenuKontak.js"
import Menut from "./page/MenuTentangKami.js"


const Header =()=>{
  return (
    <div> 
      <h2>Ini Halaman Untuk Header</h2>
    </div>
  )
}

const Footer =()=>{
  return (
    <div> 
      <h2>Ini Halaman Untuk Footer</h2>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div>
      <Header/>
      <Menuu/>
      <Menup/>
      <Menuk/>
      <Menut/>
      <Footer/>
      </div>
    );
  }
}

export default App;