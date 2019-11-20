import { ADD_CLIENT } from './constants/index';
const initialState = {
  clients: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      console.log("111111111", action.payload);
      return {...state, clients: [...state.clients, action.payload]}
    default:
    return state
  }
}
