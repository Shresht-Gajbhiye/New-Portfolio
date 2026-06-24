import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(); // Form reference for EmailJS
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [status, setStatus] = useState({ type: "", message: "" }); // Status message

  // ✅ Auto-hide message after 3 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // EmailJS se email send karein
      const result = await emailjs.sendForm(
        "service_ap8uzgg",
        "template_ebi1938",
        formRef.current,
        "-3WzzIsXIztjEqmqO",
      );

      console.log("Email sent:", result.text);

      // Success message
      setStatus({
        type: "success",
        message: "✅ Message sent successfully!",
      });

      // Form clear karein
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);

      // Error message
      setStatus({
        type: "error",
        message: "❌ Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Contact{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Me
            </span>
          </h3>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Status Message Display */}
        {status.message && (
          <div
            className={`mb-6 p-4 rounded-xl ${
              status.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-400"
                : "bg-red-500/20 border border-red-500/50 text-red-400"
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="mb-8">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none disabled:opacity-50"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isLoading ? (
              <>
                <span className="inline-block animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
