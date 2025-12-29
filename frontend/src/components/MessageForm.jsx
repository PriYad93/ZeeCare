import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!firstName || !email || !message) {
      toast.error("Please fill First Name, Email and Message");
      return false;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please provide a valid email address");
      return false;
    }
    return true;
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/message/send`,
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container form-component message-form">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <label className="sr-only">First Name
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-required="true"
              />
            </label>
            <label className="sr-only">Last Name
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="sr-only">Email
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </label>
            <label className="sr-only">Mobile Number
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <label className="sr-only">Message
            <textarea
              rows={7}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-required="true"
            />
          </label>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              aria-busy={loading}
              aria-disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  );
};

export default MessageForm;
