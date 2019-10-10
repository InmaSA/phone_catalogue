import axios from 'axios'

export default class DataServices {
  constructor() {

      this.service = axios.create({
        baseURL: 'http://localhost:5000',
        withCredentials: true
      })
  }

  // hacemos una llamada al servidor para obtener los valores phones.json
 getPhones = () => {return this.service.get('/phones')}

}