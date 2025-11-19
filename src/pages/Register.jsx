import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import { useState, useEffect } from "react";

function Register() {
  return (
    <>
      <PageNav />
      <RegisterPage />
      <Footer />
    </>
  );
}

function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    // add other fields you need
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // preload from sessionStorage if present (helps if user comes back)
    const draft = sessionStorage.getItem("registrationDraft");
    if (draft) setForm(JSON.parse(draft));
  }, []);

  useEffect(() => {
    // save draft on change
    sessionStorage.setItem("registrationDraft", JSON.stringify(form));
  }, [form]);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone required";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      // send form data to backend to initialize payment
      const res = await fetch("/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Payment initiation failed");

      // data should include { paymentUrl, reference }
      // redirect user to payment gateway
      window.location.href = data.paymentUrl;
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong — try again");
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Full name</label>
          <input
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
          {errors.fullName && <small>{errors.fullName}</small>}
        </div>

        <div>
          <label>Email</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div>
          <label>Phone</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div>
          <label>Membership type</label>
          <select
            value={form.eventType}
            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            className="w-fit"
          >
            <option value="">Choose</option>
            <option value="Field Operational Membership">Field Operational Membership</option>
            <option value="Philantropic Membership">Philantropic Membership</option>
            <option value="Professional Membership (Individual)">Professional Membership (Individual)</option>
            <option value="Corporate Membership">Corporate Membership</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Redirecting to payment..." : "Register & Pay"}
        </button>
      </form>
    </div>
  );
}

export default Register;
