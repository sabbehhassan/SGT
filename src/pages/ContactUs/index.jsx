import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzaaz1d", // apna service ID
        "template_shxopya", // apna template ID
        form.current,
        "v7iYMfI0wo13cDRmW" // apna public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message");
          console.error(error.text);
        }
      );
  };

  const cardData = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Our Office",
      line1: "Near Mama Communication, Noor Plaza, Khomer Gilgit",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Call Us",
      line1: "+92 327-0099-635",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      line1: "info@siliconglobaltech.com",
    },
    {
      icon: <FaGlobe size={24} />,
      title: "Website",
      line1: "www.siliconglobaltech.com",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-cyan-500 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.line1}</p>
                {item.line2 && (
                  <p className="text-sm text-gray-400">{item.line2}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#1e293b] bg-opacity-95 rounded-xl p-8 shadow-xl max-w-xl w-full mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
