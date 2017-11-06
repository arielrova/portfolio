// Api är ett Axios-objekt som innehåller necessary data för att prata med servern
import Api from '@/services/Api'

export default {
  // Om någon kallar fetchItems så ska vi köra ett HTTP-request med Get-metoden och 'admin' som argument
  fetchItems () {
    return Api().get('admin')
  },

  addItem (params) {
    return Api().post('admin', params)
  },

  updateItem (params) {
    return Api().put('items/' + params.id, params)
  },

  getItem (params) {
    return Api().get('item/' + params.id)
  }
}
