import React, {Component} from 'react'
// importamos el método connect para que el componente App quede conectado con el store
import {connect} from 'react-redux'
import './App.css'

import { Switch, Route } from 'react-router-dom'


// importamos los componentes que van a aparecer en la vista
import Phones from '../src/components/Phones'
import PhoneDetails from '../src/components/Phone.details'

// importamos el servicio de phones.services para hacer la llamada al servidor con axios
import PhonesServices from './services/phones.services'
const phonesServices = new PhonesServices


// con mapDispatchToProps App hace un dispatch de la acción 'GET_PHONES' que recoge el reducer y actualiza el state del store

const mapDispatchToProps = dispatch => {
  return {
    getPhonesFromServer() {
      phonesServices.getPhones()
      .then(response => {
        console.log(response.data)
        dispatch(
          {type:'GET_PHONES', payload: response.data}
        )
      })
      .catch(err => console.log(err))
    }
  }
}


class App extends Component {


  // Utilizamos CompDidMount porque necesitamos que nos llegue el state desde el Store antes de la renderización
  componentDidMount() {this.props.getPhonesFromServer()}

  render() { 

    return ( 
      <Switch>
        <Route path="/" exact component={Phones} />
        <Route path="/:id" exact component={PhoneDetails} />
      </Switch>
     )
  }
}
 

// con mapStateToProps nos aseguramos de que el estado del store llegue a este componente
const mapStateToProps = state => {
  return(
    {phones: state.phones}
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App)

