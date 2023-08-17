function ContactList() {
  const contacts = [
    {
      firstName: "John",
      middleName: "Michael",
      lastName: "Doe",
      mobileNumber: "123-456-7890",
      emailAddress: "john@example.com",
    },
    {
      firstName: "Jane",
      middleName: "Elizabeth",
      lastName: "Smith",
      mobileNumber: "987-654-3210",
      emailAddress: "jane@example.com",
    },
    {
      firstName: "Michael",
      middleName: "Christopher",
      lastName: "Johnson",
      mobileNumber: "555-123-4567",
      emailAddress: "michael@example.com",
    },
    {
      firstName: "Emily",
      middleName: "Grace",
      lastName: "Williams",
      mobileNumber: "777-888-9999",
      emailAddress: "emily@example.com",
    },
    {
      firstName: "David",
      middleName: "Robert",
      lastName: "Lee",
      mobileNumber: "222-333-4444",
      emailAddress: "david@example.com",
    },
    {
      firstName: "Sophia",
      middleName: "Olivia",
      lastName: "Miller",
      mobileNumber: "999-888-7777",
      emailAddress: "sophia@example.com",
    },
    {
      firstName: "William",
      middleName: "Alexander",
      lastName: "Brown",
      mobileNumber: "444-555-6666",
      emailAddress: "william@example.com",
    },
  ];

  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Contacts List
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
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
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Email: email@windster.com
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Number: 09214748564
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
