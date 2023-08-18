import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="container mx-auto py-10 px-5">
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
}

export default App;
