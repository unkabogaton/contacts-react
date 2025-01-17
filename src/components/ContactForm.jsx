import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  changeAlertMessage,
  updateContact,
} from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import backIcon from "../assets/arrow-left.svg";

function ContactForm() {
  const navigate = useNavigate();
  const selectedContactId = useParams().id;
  const contactToUpdate = useSelector((state) =>
    state.contacts.find((contact) => contact.id == selectedContactId)
  );

  const availableIndex = useSelector((state) => state.availableIndex);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(contactToUpdate?.firstName || "");
  const [lastName, setLastName] = useState(contactToUpdate?.lastName || "");
  const [middleName, setMiddleName] = useState(
    contactToUpdate?.middleName || ""
  );
  const [mobileNumber, setMobileNumber] = useState(
    contactToUpdate?.mobileNumber || ""
  );
  const [emailAddress, setEmailAddress] = useState(
    contactToUpdate?.emailAddress || ""
  );
  const [middleNameExist, setMiddleNameExist] = useState(true);

  const submitContactForm = async (e) => {
    e.preventDefault();

    const newContact = {
      id: availableIndex,
      firstName,
      middleName,
      lastName,
      mobileNumber,
      emailAddress,
    };

    if (contactToUpdate) {
      newContact.id = contactToUpdate.id;
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    setFirstName("");
    setMiddleName("");
    setLastName("");
    setMobileNumber("");
    setEmailAddress("");

    navigate("/");
  };

  const hideAlertMessage = () => {
    dispatch(
      changeAlertMessage({
        show: false,
      })
    );
  };

  const showAlertMessage = (alertMessage) => {
    dispatch(
      changeAlertMessage({
        show: true,
        text: alertMessage,
        color: "red",
      })
    );
  };

  const validateField = (field, value) => {
    switch (field) {
      case "firstName":
        isStringEmpty(value)
          ? showAlertMessage("First name is required")
          : hideAlertMessage();
        break;
      case "middleName":
        isStringEmpty(value)
          ? showAlertMessage("Middle name is required")
          : hideAlertMessage();
        break;
      case "lastName":
        isStringEmpty(value)
          ? showAlertMessage("Last name is required")
          : hideAlertMessage();
        break;
      case "mobileNumber":
        isStringEmpty(value)
          ? showAlertMessage("Mobile number is required")
          : !isValidMobileNumber(value)
          ? showAlertMessage(
              'Mobile number must start with "09" and have a length of 11 characters'
            )
          : hideAlertMessage();
        break;
      case "emailAddress":
        isStringEmpty(value)
          ? showAlertMessage("Email address is required")
          : !isValidEmail(value)
          ? showAlertMessage("Invalid email address, should include '@domain'")
          : hideAlertMessage();
        break;
      default:
        break;
    }
  };

  const isStringEmpty = (string) => {
    return string == "";
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (number) => {
    return number.startsWith("09") && number.length == 11;
  };

  const handleMiddleNameChange = (e) => {
    if (e.target.checked) {
      setMiddleNameExist(false);
      setMiddleName("");
      setmiddleNameError(false);
      hideAlertMessage();
    } else {
      setMiddleNameExist(true);
      setmiddleNameError(true);
    }
  };

  return (
    <>
      <div className="w-full max-w-xl  bg-white border hover:drop-shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex items-center justify-start p-4 sm:p-8 bg-gradient-to-r from-blue-500 to-cyan-500">
          <button
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigate(-1)}
          >
            <img src={backIcon} className="w-5 h-5" alt="Back" />
          </button>
          <h5 className="text-2xl font-bold leading-none text-white  dark:text-white">
            {contactToUpdate ? "Update Contact" : "Create Contact"}
          </h5>
        </div>
        <div className="flow-root p-4 sm:p-8">
          <form onSubmit={submitContactForm}>
            <div className="grid gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name*
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value.trim());
                    validateField("firstName", e.target.value.trim());
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Middle Name*
                </label>
                {middleNameExist && (
                  <div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                      value={middleName}
                      onChange={(e) => {
                        setMiddleName(e.target.value.trim());
                        validateField("middleName", e.target.value.trim());
                      }}
                    />
                  </div>
                )}
                <input
                  type="checkbox"
                  value="true"
                  onChange={(e) => handleMiddleNameChange(e)}
                />
                <label className="ml-2 text-sm font-medium text-gray-900">
                  No Middle Name
                </label>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name*
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dela Cruz"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value.trim());
                    validateField("lastName", e.target.value.trim());
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number*
                </label>
                <input
                  type="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="09xxxxxxxxx"
                  pattern="09[0-9]{9}"
                  required
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value.trim());
                    validateField("mobileNumber", e.target.value.trim());
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address*
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value.trim());
                    validateField("emailAddress", e.target.value.trim());
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {contactToUpdate ? "Update Contact" : "Add Contact"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
