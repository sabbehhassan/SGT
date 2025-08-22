export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#0b3d91] to-[#0f766e] text-white px-6 py-12 w-full">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between text-center md:text-left">
        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="mb-4 text-xl font-bold">Contact Us</h4>
          <p className="text-gray-200">+92 327 0099 635</p>
          <p className="text-gray-200">info@siliconglobaltech.com</p>
          <p className="text-gray-200">
            Near Mama Communication Nadra E Sahulat Noor Plaza Khomer Gilgit
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="mb-4 text-xl font-bold">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl flex-wrap">
            {[
              { icon: "facebook-f", url: "https://www.facebook.com" },
              { icon: "twitter", url: "https://www.twitter.com" },
              { icon: "linkedin-in", url: "https://www.linkedin.com" },
              { icon: "github", url: "https://github.com" },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 pt-6 border-t border-gray-500/40">
        <p className="text-gray-200">
          &copy; 2025 <span className="font-semibold">Silicon Global Tech</span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
