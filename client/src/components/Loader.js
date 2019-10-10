import React, { Component } from 'react'

// importamos los estilos
import '../styles/loader.css'

class Loader extends Component {

  render() {
    return (

      <div className="loader">
          <div className="loader-item ball-one"></div>
          <div className="loader-item ball-two"></div>
          <div className="loader-item ball-three"></div>
      </div>

    )
  }
}

export default Loader