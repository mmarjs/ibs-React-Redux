import { ADD_CLIENT } from '../constants/';

const initialState = {
    clients: [],
    cClients: [],
    iClients: [],
    benefits: [],
    riskCategories: [],
    riskClasses: [],
    coverTypes: [],
    productTypes: [],
    users: [],
    underWriters: [],
    promotions: []
}

export default (state = initialState, action) => {    
    switch (action.type) {
      case ADD_CLIENT:
        switch (action.payload["userType"]){
          case "cClient":
            return  {...state, cClients: [...state.cClients, action.payload]}
          case "iClient":
            return  {...state, iClients: [...state.iClients, action.payload]}
          case "benefit":
            return  {...state, benefits: [...state.benefits, action.payload]}
          case "riskCategory":
            return  {...state, riskCategories: [...state.riskCategories, action.payload]}
          case "riskClass":
            return  {...state, riskClasses: [...state.riskClasses, action.payload]}
          case "coverType":
            return  {...state, coverTypes: [...state.coverTypes, action.payload]}
          case "productType":
            return  {...state, productTypes: [...state.productTypes, action.payload]}
          case "underWriter":
            return  {...state, underWriters: [...state.underWriters, action.payload]}
          case "user":
            return  {...state, users: [...state.users, action.payload]}
          case "promotion":
            return  {...state, promotions: [...state.promotions, action.payload]}
          default:
            return state;
        }    
      default:
      return state
    }
};
