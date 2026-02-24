

// "use client";

// import { motion } from "framer-motion";
// import { FaHeadphonesAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Image from "next/image";
// import contactImg from '@/public/images/contact/contact.jpg'
// export default function ContactPage() {
//   const contactData = [
//     {
//       type: "phone",
//       title: "Contact Phone Number",
//       values: ["+91 9537344018", "+91 9558216969"],
//       icon: <FaHeadphonesAlt />,
//     },
//     {
//       type: "email",
//       title: "Our Email Address",
//       values: ["info@codingcloudinstitute.com"],
//       icon: <FaEnvelope />,
//     },
//     {
//       type: "location",
//       title: "Our Location",
//       values: [
//         "Unit No, 201, 2nd Floor, Polaris, Near Noble Hospital, Hadapsar, Pune, Maharashtra 411060",
//       ],
//       icon: <FaMapMarkerAlt />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-soft-gradient">

//       {/* ================= HEADER ================= */}
//       <section className="py-24 text-center">
//         <div className="container-custom">
//           <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full">
//             CONTACT US
//           </span>

//           <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-text)]">
//             Reach Our Training Center
//           </h1>
//         </div>
//       </section>

//       {/* ================= CONTACT CARDS ================= */}
//       <section className="pb-24">
//         <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {contactData.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white border border-[var(--color-border)] p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
//             >
//               <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl text-white text-2xl bg-[var(--color-primary)] shadow">
//                 {item.icon}
//               </div>

//               <h3 className="font-bold text-lg text-[var(--color-text)] mb-3">
//                 {item.title}
//               </h3>

//               {item.values.map((val, idx) => (
//                 <p key={idx} className="text-gray-600 text-sm leading-relaxed">
//                   {val}
//                 </p>
//               ))}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CONTACT FORM SECTION ================= */}
//       <section className="pb-24">
//         <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

//           {/* LEFT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative w-full h-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg"
//           >
//             <Image
//               src={contactImg}
//               alt="contact"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* RIGHT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="bg-white p-6 md:p-10 rounded-2xl shadow-lg"
//           >
//             <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold text-[var(--color-primary)] bg-purple-100 rounded-full uppercase tracking-wider">
//               EDUCATION FOR EVERYONE
//             </span>

//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
//               Get a Free Course You Can Contact With Me
//             </h2>

//             <form className="space-y-5">

//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border-b border-gray-300 p-3 outline-none focus:border-[var(--color-primary)] bg-transparent"
//               />

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border-b border-gray-300 p-3 outline-none focus:border-[var(--color-primary)] bg-transparent"
//               />

//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 className="w-full border-b border-gray-300 p-3 outline-none focus:border-[var(--color-primary)] bg-transparent"
//               />

//               <textarea
//                 placeholder="Message"
//                 rows={4}
//                 className="w-full border-b border-gray-300 p-3 outline-none focus:border-[var(--color-primary)] bg-transparent"
//               />

//               <button
//                 type="submit"
//                 className="w-full mt-4 bg-gradient-to-r from-[var(--color-primary)] to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
//               >
//                 GET IT NOW →
//               </button>

//             </form>
//           </motion.div>

//         </div>
//       </section>

//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { FaHeadphonesAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import contactImg from '@/public/images/contact/contact.jpg'
import { useState } from "react";
import { BASE_URL } from "@/lib/api";
export default function ContactPage() {
  const contactData = [
    {
      title: "Contact Phone Number",
      values: ["+91 95373 44018", "+91 95373 44018"],
      icon: <FaHeadphonesAlt />,
    },
    {
      title: "Our Email Address",
      values: ["info@codingcloudinstitute.com","pune@codingcloudinstitute.com"],
      icon: <FaEnvelope />,
    },
    {
      title: "Head Office",
      values: [
        "Unit No, 201, 2nd Floor, Polaris, Near Noble Hospital, Hadapsar, Pune, Maharashtra 411060",
      ],
      icon: <FaMapMarkerAlt />,
    },
      {
      title: "Branch",
      values: [
        "Office No. 401, 4th Floor, Sapphire Complex, C.G Road, Ahmedabad, Gujarat, 380009",
      ],
      icon: <FaMapMarkerAlt />,
    },
  ];
const [form, setForm] = useState({
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [errors, setErrors] = useState<any>({});
const [globalError, setGlobalError] = useState("");const handleChange = (e: any) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const validateForm = () => {
  let newErrors: any = {};

  // NAME
  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  // EMAIL
  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter valid email";
    }
  }

  // MOBILE
  if (!form.mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
  } else {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }
  }

  // SUBJECT
  if (!form.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  // MESSAGE
  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = async (e: any) => {
  e.preventDefault();

  setGlobalError("");
  setSuccess(false);

  // 🔥 VALIDATE
  if (!validateForm()) {
    setGlobalError("⚠️ Please fix the errors below");
    setTimeout(() => setGlobalError(""), 4000);
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(`${BASE_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: form.name,
        email: form.email,
        mobile_no: form.mobile,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
      setErrors({});

      setTimeout(() => setSuccess(false), 4000);
    } else {
      setGlobalError("❌ Something went wrong");
      setTimeout(() => setGlobalError(""), 4000);
    }
  } catch (err) {
    setGlobalError("❌ Server error");
    setTimeout(() => setGlobalError(""), 4000);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-soft-gradient">

      {/* ================= HEADER ================= */}
      <section className="py-20 md:py-10 text-center">
        <div className="container-custom">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full">
            CONTACT US
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Reach Our Training Center
          </h1>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {contactData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-[var(--color-border)] p-8 md:p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl text-white text-2xl bg-[var(--color-primary)] shadow">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-lg text-[var(--color-text)] mb-3">
                {item.title}
              </h3>

              {/* VALUES */}
              {item.values.map((val, idx) => (
                <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                  {val}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="pb-20 md:pb-24">
<div className="container-custom max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={contactImg}
              alt="Contact"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT FORM */}
          {/* <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-center h-[320px] md:h-[520px]"          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full uppercase tracking-wider">
              EDUCATION FOR EVERYONE
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-text)] mb-6 leading-tight">
              Get a Free Course You Can Contact With Me
            </h2>

            <form className="space-y-3">

              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-[var(--color-border)] p-2 outline-none focus:border-[var(--color-primary)] bg-transparent"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[var(--color-border)] p-2 outline-none focus:border-[var(--color-primary)] bg-transparent"
              />

              <input
                type="text"
                placeholder="Your Subject"
                className="w-full border-b border-[var(--color-border)] p-2 outline-none focus:border-[var(--color-primary)] bg-transparent"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full border-b border-[var(--color-border)] p-2 outline-none focus:border-[var(--color-primary)] bg-transparent"
              />

              <button
                type="submit"
                className="w-full mt-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
              >
                GET IT NOW →
              </button>

            </form>
          </motion.div> */}
{/* <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-white p-4 md:p-8 rounded-2xl shadow-lg flex flex-col justify-start h-auto min-h-[400px] md:min-h-[520px] max-h-[600px] md:max-h-none overflow-y-auto md:overflow-visible"
>
  <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full uppercase tracking-wider">
    EDUCATION FOR EVERYONE
  </span>

  <h2 className="text-xl md:text-4xl font-bold text-[var(--color-text)] mb-4 md:mb-6 leading-tight">
    Get a Free Course You Can Contact With Me
  </h2>

  <form className="space-y-3 md:space-y-3">
    <input
      type="text"
      placeholder="Name"
      className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
    />

    <input
      type="text"
      placeholder="Your Subject"
      className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
    />

    <textarea
      placeholder="Message"
      rows={2}
      className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent resize-none"
    />

    <button
      type="submit"
      className="w-full mt-2 md:mt-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-2.5 md:py-3 rounded-lg font-semibold hover:scale-[1.02] transition text-sm md:text-base"
    >
      GET IT NOW →
    </button>
  </form>
</motion.div> */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-white p-4 md:p-8 rounded-2xl shadow-lg flex flex-col justify-start h-auto min-h-[400px] md:min-h-[520px] max-h-[600px] md:max-h-none overflow-y-auto md:overflow-visible"
>
  <span className="inline-block px-4 py-1 mb-3 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full uppercase tracking-wider">
    EDUCATION FOR EVERYONE
  </span>

  <h2 className="text-xl md:text-4xl font-bold text-[var(--color-text)] mb-3 md:mb-5 leading-tight">
    Get a Free Course You Can Contact With Me
  </h2>
{success && (
  <p className="text-green-600 text-sm font-medium mb-2">
    ✅ Message sent successfully!
  </p>
)}

{globalError && (
  <p className="text-red-500 text-sm font-medium mb-2">
    {globalError}
  </p>
)}
  {/* 🔥 FORM */}
<form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">    
 <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Name"
  
  className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
/>
{errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
<input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
/>
{errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
    {/* 🔥 NEW MOBILE FIELD */}
<input
  type="tel"
  name="mobile"
  value={form.mobile}
  onChange={(e) => {
    const val = e.target.value.replace(/\D/g, "");
    setForm({ ...form, mobile: val.slice(0, 10) });
  }}
  placeholder="Mobile Number"
  className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
/>
{errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}

<input
  type="text"
  name="subject"
  value={form.subject}
  onChange={handleChange}
  placeholder="Your Subject"
  className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
/>

{/* 🔴 ERROR MESSAGE */}
{errors.subject && (
  <p className="text-red-500 text-xs mt-1">
    {errors.subject}
  </p>
)}
<textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Message"
  rows={1}
  className="w-full border-b border-[var(--color-border)] p-2 text-sm md:text-base outline-none focus:border-[var(--color-primary)] bg-transparent"
/>
{errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
<button
  type="submit"
  disabled={loading}
  className="w-full mt-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-2.5 md:py-3 rounded-lg font-semibold hover:scale-[1.02] transition text-sm md:text-base"
>
  {loading ? "Sending..." : "GET IT NOW →"}
</button>
  </form>
</motion.div>
        </div>
      </section>


      {/* ================= GOOGLE MAP SECTION ================= */}
<section className="pb-20 md:pb-24">
  <div className="container-custom">

    <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">

      <iframe
  src="https://www.google.com/maps?q=Office%20No.%20201%2C%202nd%20Floor%2C%20Polaris%20Building%2C%20Near%20Noble%20Hospital%2C%20Hadapsar%2C%20Pune%20411028&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[350px] md:h-[500px]"
      ></iframe>

    </div>

  </div>
</section>

    </div>
  );
}