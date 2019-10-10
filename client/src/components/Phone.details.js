import React, {Component} from 'react'
// importamos el método connect para que el componente App quede conectado con el store
import {connect} from 'react-redux'

// importamos los componentes que necesitamos
import Loader from './Loader'

// importamos los estilos
import '../styles/phone.details.css'


// enviamos el estado del store al componente, que llega como props
const mapStateToProps = state => {
  return(
    {phones: state.phones}
  )
}



class PhoneDetails extends Component {

  
  render()  {

    const phones = this.props.phones
    const phoneId = this.props.match.params.id


    if(phones.length === 0) return <Loader/>
    
    if (phones[0].length >= 1) {
      const thisPhone = phones[0].filter((elm) => elm.id == phoneId )

      return ( 
        <section className="container details-view"> 
          <header className="details-header">
             <h2>{thisPhone[0].name} details:</h2>
          </header>

          <div className="row">
            <div className="col-md-5">
              <img src={thisPhone[0].imageFileName} alt={thisPhone[0].name}></img>
            </div>
            <div className="col-md-5 detail-info">
              <p>{thisPhone[0].description}</p>
              <p>Color {thisPhone[0].color}</p>
              <p>{thisPhone[0].name} from {thisPhone[0].manufacturer}</p>
              <p>Screen of {thisPhone[0].screen}</p>
              <p>Processor {thisPhone[0].processor}</p>
              <p>{thisPhone[0].ram}GB RAM</p>
              <p>{thisPhone[0].price} €</p>
            </div>
          </div>  
        </section>
       )
    }

  }

}
 

export default connect(
  mapStateToProps,
) (PhoneDetails)
