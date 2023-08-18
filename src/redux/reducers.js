import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  contacts: [
    {
      id: 1,
      firstName: "John",
      middleName: "Michael",
      lastName: "Doe",
      mobileNumber: "1234567890",
      emailAddress: "john@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      middleName: "Elizabeth",
      lastName: "Smith",
      mobileNumber: "9876543210",
      emailAddress: "jane@example.com",
    },
    {
      id: 3,
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
    case UPDATE_CONTACT: {
      const contactsAfterEdit = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: contactsAfterEdit,
      };
    }
    case DELETE_CONTACT: {
      const contactsAfterDelete = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      console.log(state);
      return {
        ...state,
        contacts: contactsAfterDelete,
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
