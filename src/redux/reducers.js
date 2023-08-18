import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  contacts: [
    {
      firstName: "John",
      middleName: "Michael",
      lastName: "Doe",
      mobileNumber: "1234567890",
      emailAddress: "john@example.com",
    },
    {
      firstName: "Jane",
      middleName: "Elizabeth",
      lastName: "Smith",
      mobileNumber: "9876543210",
      emailAddress: "jane@example.com",
    },
    {
      firstName: "Michael",
      middleName: "Christopher",
      lastName: "Johnson",
      mobileNumber: "555-123-4567",
      emailAddress: "michael@example.com",
    },
  ],
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
