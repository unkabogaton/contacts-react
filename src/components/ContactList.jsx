import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.svg";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full max-w-2xl  bg-white border hover:drop-shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex items-center justify-between p-4 sm:p-8 -mb-5 bg-gradient-to-r from-blue-500 to-cyan-500">
          <h5 className="text-2xl font-bold leading-none text-white  dark:text-white">
            Contacts List
          </h5>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
            onClick={() => navigate("/create-contact")}
          >
            + Add Contact
          </button>
        </div>
        <div className="flow-root p-4 sm:p-8">
          {contacts.length == 0 && <div className="text-xl"> No Contacts </div>}
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {contacts.map((contact) => (
              <li className="py-3 sm:py-4" key={contact.id}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <img
                        src={userIcon}
                        className="absolute w-12 h-12"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                      {contact.firstName} {contact.middleName}{" "}
                      {contact.lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Email: {contact.emailAddress}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Number: {contact.mobileNumber}
                    </p>
                  </div>
                  <button
                    className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    onClick={() => navigate("/update-contact/" + contact.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    onClick={() => {
                      confirm(
                        `Are you sure you want to delete this contact '${contact.firstName}'?`
                      ) && dispatch(deleteContact(contact.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
