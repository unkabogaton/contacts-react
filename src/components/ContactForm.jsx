import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, updateContact } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import backIcon from "../assets/arrow-left.svg";

function ContactForm() {
  const navigate = useNavigate();
  const selectedContactId = useParams().id;
  const contactToUpdate = useSelector((state) =>
    state.contacts.find((contact) => contact.id == selectedContactId)
  );

  let availableIndex = useSelector((state) => state.availableIndex);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  useEffect(() => {
    if (contactToUpdate) {
      setFirstName(contactToUpdate.firstName);
      setMiddleName(contactToUpdate.middleName);
      setLastName(contactToUpdate.lastName);
      setMobileNumber(contactToUpdate.mobileNumber);
      setEmailAddress(contactToUpdate.emailAddress);
    }
  }, [contactToUpdate]);

  const submitContactForm = (e) => {
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

  const isStringValid = (string) => {
    string === "";
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (number) => {
    return number.startsWith("09") || number.length == 11;
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
                  First name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value.trim())}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value.trim())}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dela Cruz"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value.trim())}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="092147478564"
                  pattern="09[0-9]{9}"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.trim())}
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value.trim())}
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
