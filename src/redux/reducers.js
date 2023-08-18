import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACT:
      // Implement the update logic here
      return state;
    case DELETE_CONTACT:
      // Implement the delete logic here
      return state;
    default:
      return state;
  }
};

export default contactReducer;
