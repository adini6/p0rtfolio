import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_xetik6m', 'template_pjhmmjo', form.current, 'adini18')
    .then((result) => {
        console.log(result.text);
        alert("Message sent!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-md bg-black p-6 border-2 border-white rounded">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name" name="from_name" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Email" name="reply_to" required />
            </div>
          </div>
          <div className="w-full px-3 mb-6">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subject" type="text" placeholder="Subject" name="subject" required />
          </div>
          <div className="w-full px-3 mb-6">
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Message" name="message" required></textarea>
          </div>
          <div className="w-full px-3 text-right">
            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-4 leading-normal no-underline bg-black text-white" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
  
  
};

export default Contact;
