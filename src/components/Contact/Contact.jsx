import React, { Fragment, useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useTheme } from "../../context/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      Swal.fire({
        title: "⚠️ Please verify you are not a robot.",
        icon: "warning",
        confirmButtonColor: "#667eea",
      });
      return;
    }

    emailjs
      .send(
        "service_hdb394q",
        "template_6g4dktp",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          "g-recaptcha-response": captchaToken,
        },
        "XygtdWUHi3sU2k01a"
      )
      .then(() => {
        Swal.fire({
          title: "Message sent successfully!",
          icon: "success",
          confirmButtonColor: "#667eea",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
      })
      .catch(() => {
        Swal.fire({
          title: "Failed to send message. Please try again later.",
          icon: "error",
          confirmButtonColor: "#667eea",
        });
      });
  };

  return (
    <Fragment>
      <section
        id="contact"
        className={`relative min-h-screen pt-20 pb-16 overflow-hidden transition-all duration-500 ${
          theme === "light"
            ? "bg-gray-50 text-gray-900"
            : "bg-[#010412] text-white"
        }`}
      >
        <div className="container mx-auto px-4 relative z-10 max-w-7xl sm:px-6 md:px-8 lg:px-8 md:py-16">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-3 ${
                theme === "light" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-lg ${
                theme === "light" ? "text-gray-700" : "text-[#b0b0c0]"
              }`}
            >
              Have a project in mind? Let's work together!
            </p>
          </header>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
            {/* Left: Contact Options */}
            <div
              className={`rounded-3xl p-8 lg:p-10 border transition-all duration-300 lg:sticky lg:top-8 ${
                theme === "light"
                  ? "bg-white border-violet-300/80"
                  : "bg-gray-900 border-[#667eea]/30"
              }`}
            >
              <h2 className="text-3xl font-bold mb-3 text-violet-600">
                Connect with Me
              </h2>
              <p
                className={`text-sm mb-8 ${
                  theme === "light" ? "text-gray-600" : "text-[#b0b0c0]"
                }`}
              >
                Choose your preferred way to reach out
              </p>

              <div className="flex flex-col space-y-4">
                {[
                  {
                    href: "https://wa.me/94712865408",
                    icon: <FaWhatsapp className="w-6 h-6" />,
                    title: "WhatsApp",
                    subtitle: "+94 71 286 5408",
                    gradient: "from-[#25D366] to-[#128C7E]",
                  },
                  {
                    href: "https://m.me/praneeth.sandaruwan.357",
                    icon: <SiMessenger className="w-6 h-6" />,
                    title: "Messenger",
                    subtitle: "@praneeth.sandaruwan.357",
                    gradient: "from-[#00B2FF] to-[#0078FF]",
                  },
                  {
                    href: "https://t.me/+94778830166",
                    icon: <FaTelegramPlane className="w-6 h-6" />,
                    title: "Telegram",
                    subtitle: "+94 71 286 5408",
                    gradient: "from-[#0088cc] to-[#0066aa]",
                  },
                  {
                    href: "mailto:pubudusihan@outlook.com",
                    icon: <FaEnvelope className="w-6 h-6" />,
                    title: "Email",
                    subtitle: "praneethsbliyanage@gmail.com",
                    gradient: "from-[#EA4335] to-[#C5221F]",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer no-underline hover:translate-x-2 ${
                      theme === "light"
                        ? "bg-gray-100 border-violet-300/80 text-gray-900 hover:bg-violet-100 hover:border-violet-400"
                        : "bg-[#667eea]/15 border-[#667eea]/30 text-white hover:bg-indigo-600/15 hover:border-indigo-600/40"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br ${item.gradient}`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-base font-semibold mb-1 ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs m-0 ${
                          theme === "light" ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div
              className={`rounded-3xl p-8 lg:p-10 border transition-all duration-300 ${
                theme === "light"
                  ? "bg-white border-violet-300/80"
                  : "bg-gray-900 border-[#667eea]/30"
              }`}
            >
              <h2 className="text-3xl font-bold mb-8 text-violet-600">
                Send me a message
              </h2>

              <form onSubmit={handleSubmit}>
                {["name", "email", "subject"].map((field) => (
                  <div key={field} className="mb-6">
                    <label
                      htmlFor={field}
                      className={`block text-sm font-semibold mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <span className="text-[#2e1065]">*</span>
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      className={`w-full p-4 rounded-xl text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#667eea]/10 ${
                        theme === "light"
                          ? "bg-gray-100 border border-violet-300/80 text-gray-900 focus:bg-violet-50"
                          : "bg-[#667eea]/15 border border-[#667eea]/30 text-white focus:bg-indigo-600/15"
                      }`}
                      placeholder={
                        field === "email"
                          ? "your.email@example.com"
                          : field === "subject"
                          ? "What's this about?"
                          : "Your name"
                      }
                      required
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-200"
                    }`}
                  >
                    Message <span className="text-[#2e1065]">*</span>
                  </label>
                  <textarea
                    id="message"
                    className={`w-full min-h-[150px] resize-y p-4 rounded-xl text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#667eea]/10 ${
                      theme === "light"
                        ? "bg-gray-100 border border-violet-300/80 text-gray-900 focus:bg-violet-50"
                        : "bg-[#667eea]/15 border border-[#667eea]/30 text-white focus:bg-indigo-600/15"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="mb-6 flex justify-center">
                  <ReCAPTCHA
                    sitekey="6LcKPf0rAAAAALKmT7THDJfzWfroSGsZJIO5hUoy"
                    onChange={(token) => setCaptchaToken(token)}
                    theme={theme === "light" ? "light" : "dark"}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full p-4 rounded-2xl uppercase tracking-wider bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 group"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactSection;
