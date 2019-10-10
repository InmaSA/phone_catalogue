const initialState = {
  phones: []
}


// con mapDispatchToProps del componente App haremos un dispatch de la acción GET_PHONES
// que recogemos en el reducer para actualizar el estado del store con los datos que nos llegan del servidor.

function reducer(state=initialState, action={}) {
  switch (action.type) {
    case 'GET_PHONES':
      return {
        ...state,
        phones: [...state.phones, action.payload]
      }
      default: return state
  }
}

export default reducer
