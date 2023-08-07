import "./Contact.css"
import ContactForm from "../components/Form"
import Map from "../components/Map"

export default function Contact() {
  return (
    <>
      <div className="main">
        <h1>Contact Us</h1>
        <div className = "form">
          <ContactForm /> 
        </div>
      </div>
      <Map />
    </>
  );
}
