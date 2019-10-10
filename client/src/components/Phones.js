import React, {Component} from 'react'
// importamos el método connect para que el componente App quede conectado con el store
import {connect} from 'react-redux'

// importamos los componentes que necesitamos
import PhoneCard from './Phone.card'
import Loader from './Loader'

// importamos los estilos
import '../styles/phones.css'


// enviamos el estado del store al componente, que llega como props
const mapStateToProps = state => {
  return(
    {phones: state.phones}
  )
}


class Phones extends Component {

  
  render()  {
    
    const phones = this.props.phones

    if(phones.length === 0) return <Loader/>
    
    return ( 

      <main className="App">

        <header className="hero">
          <h1>See our phone catalogue</h1>
        </header>

        <section className="container">
          <div className="row">
            <PhoneCard/>   
          </div>
        </section>

      </main>
     )
  }

}
 

export default connect(
  mapStateToProps,
) (Phones)

