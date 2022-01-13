import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // State variables for fields in the form and initialize them to an empty string
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  /*  const [errorMessage, setErrorMessage] = useState(""); */

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  /* const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
   
    }
    

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
 */

  return (
   
     <section id="contact" className="items-center">
      <form className='form flex flex-col  md:mt-0 w-full md:py-10 mt-8 md:mt-0  '>
      <div className="mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
        <input
          value={userName}
          name='userName'
          onChange={handleInputChange}
          type='text'
          placeholder='name'
        />
        </div>
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='email'
        />
        </div>
        <div className="relative mb-4">
        <label htmlFor="Message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
        <input
          value={message}
          name='message'
          onChange={handleInputChange}
          type='textarea'
          placeholder='Message'
        />
        </div>
        
        <button type='button' className="text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"/*  onClick={handleFormSubmit} */>Submit</button>
      </form>
      {/* {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div> */}
    </section>
    
  );
}

export default Contact;
