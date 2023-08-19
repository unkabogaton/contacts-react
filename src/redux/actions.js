export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const CHANGE_ALERT_MESSAGE = "CHANGE_ALERT_MESSAGE";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const changeAlertMessage = (alertMessage) => ({
  type: CHANGE_ALERT_MESSAGE,
  payload: alertMessage,
});
