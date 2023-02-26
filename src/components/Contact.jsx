import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[120vh] sm:h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/31a2c035-3f98-412b-bf06-d4235d8d72a6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#03fa6e] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {"//"}Submit the form below or shoot me an email -
            mayank1305.joshi@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#03fa6e] hover:border-[#03fa6e] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
