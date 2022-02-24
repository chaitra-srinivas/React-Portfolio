import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "message") {
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

    if (errorMessage === "") {
      setErrorMessage("");
      setSuccessMessage(
        "Thank you for the details. I will get back to you soon!"
      );
      setUserName("");
      setMessage("");
      setEmail("");
      return;
    }
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <section id='contact' className='flex flex-col justify-center items-center'>
      <form className='px-5 pt-6 pb-3 w-1/3'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-300 text-sm font-bold mb-2'>
            Name
          </label>
          <input
            value={userName}
            name='userName'
            onChange={handleInputChange}
            type='text'
            placeholder='Your name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='relative mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-300 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Your email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='relative mb-4'>
          <label
            htmlFor='Message'
            className='block text-gray-300 text-sm font-bold mb-2'>
            Message
          </label>
          <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            type='textarea'
            placeholder='Message'
            rows='3'
            cols='23'
            maxLength='3000'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button
          type='button'
          className='bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button'
          onClick={handleFormSubmit}>
          Submit
        </button>

        {errorMessage && (
          <div>
            <p className='error-text text-red-700 text-md'>{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className='error-text text-blue-900 text-md'>{successMessage}</p>
          </div>
        )}
      </form>
      <div
        id='email-section'
        className='px-5 pt-6 pb-3  text-gray-400 text-sm font-bold mb-2'>
        Alternatively, you can reach me at{" "}
        <a
        className="text-gray-100 text-md font-bolder"
          href='mailto:cmurthy.dev@gmail.com'
          target={"_blank"}
          rel='noreferrer noopener'>
          cmurthy.dev@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
