import React, {Component} from 'react'

// importamos el método connect para que el componente App quede conectado con el store
import {connect} from 'react-redux'

// importamos Link
import { Link } from 'react-router-dom';

// importamos los estilos
import '../styles/phone.card.css'


// enviamos el estado del store al componente, que llega como props
const mapStateToProps = state => {
  return(
    {phones: state.phones}
  )
}



class PhoneCard extends Component {

  render()  {

    const phones = this.props.phones

    return ( 

        <>
          {
            phones[0].map((elm) => {
              return (
                  
                <div key={elm.id} className="col-xl-3 col-lg-6">
                  <Link to={`/${elm.id}`}>
                    <img src={elm.imageFileName} className="phone-img" alt={elm.name}></img></Link>
                  <div className="card-body">
                    <h5 className="phone-name">{elm.name}</h5>
                  </div>
                </div>

              )
            })
          }  
        </>
    )
  }
}
 

export default connect(
  mapStateToProps,
) (PhoneCard)
