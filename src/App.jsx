import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="container mx-auto py-10 px-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="create-contact" element={<ContactForm />} />
            <Route path="update-contact/:id" element={<ContactForm />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
