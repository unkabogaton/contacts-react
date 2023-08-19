import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CHANGE_ALERT_MESSAGE,
} from "./actions";

const initialState = {
  availableIndex: 4,
  alertMessage: {
    show: false,
    color: "green",
    text: "This is a message",
  },
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
        availableIndex: state.availableIndex + 1,
        alertMessage: {
          text: "Contact successfully created!",
          color: "green",
          show: true,
        },
      };
    case UPDATE_CONTACT: {
      const contactsAfterEdit = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: contactsAfterEdit,
        alertMessage: {
          text: "Contact successfully edited!",
          color: "green",
          show: true,
        },
      };
    }
    case DELETE_CONTACT: {
      const contactsAfterDelete = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: contactsAfterDelete,
        alertMessage: {
          text: "Contact successfully deleted!",
          color: "green",
          show: true,
        },
      };
    }
    case CHANGE_ALERT_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default contactReducer;
