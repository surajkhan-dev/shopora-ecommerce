import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Submitted Successfully");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-3xl font-bold text-[#14213d] text-center mb-8">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-8">
        Have a question or need assistance? We'd love to hear from you. Send us
        a message and we'll get back to you soon.
      </p>
      <form
        onSubmit={handleSubmit}
        className=" max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          className="w-full border border-gray-300 rounded-lg p-3 "
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={(e) => {
            setFormData({ ...formData, subject: e.target.value });
          }}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <textarea
          placeholder="Message"
          required
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          className="w-full border border-gray-300 rounded-lg p-3 min-h-32 resize-y"
        />
        <button
          type="submit"
          className="bg-[#2dd4bf] text-[#14213d] px-6 py-3 rounded-lg hover:bg-[#25c4b2] transition-colors duration-200 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
