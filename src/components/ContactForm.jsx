import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(), // Generate a unique ID
      firstName,
      middleName,
      lastName,
      mobileNumber,
      emailAddress,
    };

    dispatch(addContact(newContact));

    // Clear form fields
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setMobileNumber("");
    setEmailAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
