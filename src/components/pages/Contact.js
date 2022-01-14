import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }  else if (inputType === "message"){
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !userName) {
      setErrorMessage("Email and Name are required");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <section id='contact' className='container px-5 py-10 mx-auto text-center'>
      <form className='form flex flex-col md:mt-0 w-full md:py-10 mt-8 md:mt-0 text-center'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='leading-7 text-sm text-gray-400 px-5'>
            Name
          </label>
          <input
            value={userName}
            name='userName'
            onChange={handleInputChange}
            type='text'
            placeholder='Your name'
          />
        </div>
        <div className='relative mb-4'>
          <label
            htmlFor='email'
            className='leading-7 text-sm text-gray-400 px-5'>
            Email
          </label>
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Your email'
          />
        </div>
        <div className='relative mb-4'>
          <label
            htmlFor='Message'
            className='leading-7 text-sm text-gray-400 px-5'>
            Message
          </label>
          <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            type='textarea'
            placeholder='Message'
            rows="3" cols="23"
            maxLength="3000"
        />
        </div>
        <button
          type='button'
          className='text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg'
          onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
