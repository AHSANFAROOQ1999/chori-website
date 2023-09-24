import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const scripturl =
    "https://script.google.com/macros/s/AKfycbwXa06Gs3okge3bMtO6mLz9Q6HmpDzWlzBYV_6RksLu1ixvQ_sD1NR91Q_RGBHIKz6-Ag/exec";

  const dosubmit = (aname, aemail, amessage) => {
    let requestBody = new FormData();
    requestBody.append("Name", aname);
    requestBody.append("Email", aemail);
    requestBody.append("Message", amessage);

    fetch(scripturl, { method: "POST", body: requestBody })
      .then((response) => {
        // console.log(response)
        // alert('Success!', response)
        // submitButton.disabled = false
      })
      .catch((error) => {
        //  alert('Error!', error.message)
        //  submitButton.disabled = false
      });
  };

  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleclick = (e) => {
    e.preventDefault();
    console.log(data.name, data.email, data.message);
    alert("Sending message please wait...");
    dosubmit(data.name, data.email, data.message);

    setData({ name: "", email: "", message: "" });
  };
  const onChange = (e) => {
    //VVIP

    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4969404828475!2d74.29822767616993!3d31.565417844914183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191cb1d5b91c33%3A0xc41ebd057dc163c7!2sSessions%20Court%20Lahore!5e0!3m2!1sen!2suk!4v1695417224047!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ filter: "grayscale(0) contrast(1.2) opacity(0.8)" }}
          ></iframe>
          <div
            className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md address_box"
            style={{ width: "100%" }}
          >
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Session Court Lahore</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <Link className="text-indigo-400 leading-relaxed">
                Chmehrozqayyumadv@gmail.com
              </Link>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+92 3334003110</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form onSubmit={handleclick}>
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5">Get in touch with us</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required={true}
                value={data.name}
                onChange={onChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={onChange}
                required={true}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={onChange}
                required={true}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Send
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              Please fill the valid details.Thank you !
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
