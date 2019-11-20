import * as types from '../constants/';
export const allClients = (clientData) => {
    return {
        type: types.ADD_CLIENT,
        payload: clientData
    }
}