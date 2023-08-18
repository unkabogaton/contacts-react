import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <>
      <div className="w-full max-w-md  bg-white border hover:drop-shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex items-center justify-between p-4 sm:p-8 -mb-5 bg-gradient-to-r from-blue-500 to-cyan-500">
          <h5 className="text-2xl font-bold leading-none text-white  dark:text-white">
            Contacts List
          </h5>
        </div>
        <div className="flow-root p-4 sm:p-8">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {contacts.map((contact) => (
              <li className="py-3 sm:py-4" key={contact.id}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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
