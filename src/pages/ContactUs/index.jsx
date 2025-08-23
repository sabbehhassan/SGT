import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Info */}
        <div className="text-white space-y-8">
          <h2 className="text-4xl font-extrabold">
            Get in <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have questions, ideas, or opportunities? We’d love to hear from you.
            Let’s connect and create something amazing together.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-indigo-600/30 backdrop-blur-md">
                <Phone className="text-indigo-400 w-6 h-6" />
              </div>
              <p className="text-lg font-medium">+92 327 0099 635</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-pink-600/30 backdrop-blur-md">
                <Mail className="text-pink-400 w-6 h-6" />
              </div>
              <p className="text-lg font-medium">info@siliconglobaltech.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-orange-600/30 backdrop-blur-md">
                <MapPin className="text-orange-400 w-6 h-6" />
              </div>
              <p className="text-lg font-medium">
                Near Mama Communication, Noor Plaza, Khomer Gilgit
              </p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
