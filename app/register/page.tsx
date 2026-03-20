// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     let newErrors: any = {};

//     if (!form.first_name) newErrors.first_name = "First name required";
//     if (!form.last_name) newErrors.last_name = "Last name required";
//     if (!form.phone) newErrors.phone = "Phone required";
//     if (!form.message) newErrors.message = "Message required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     setSuccess(true);

//     setForm({
//       first_name: "",
//       last_name: "",
//       phone: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">
//           Register
//         </h2>

//         {success && (
//           <p className="text-green-600 text-sm mb-4">
//             ✅ Submitted successfully!
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="text"
//             name="first_name"
//             value={form.first_name}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="w-full border-b p-2 outline-none focus:border-purple-500"
//           />
//           {errors.first_name && (
//             <p className="text-red-500 text-xs">{errors.first_name}</p>
//           )}

//           <input
//             type="text"
//             name="last_name"
//             value={form.last_name}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full border-b p-2 outline-none focus:border-purple-500"
//           />
//           {errors.last_name && (
//             <p className="text-red-500 text-xs">{errors.last_name}</p>
//           )}

//           <input
//             type="tel"
//             name="phone"
//             value={form.phone}
//             onChange={(e) => {
//               const val = e.target.value.replace(/\D/g, "");
//               setForm({ ...form, phone: val.slice(0, 10) });
//             }}
//             placeholder="Phone Number"
//             className="w-full border-b p-2 outline-none focus:border-purple-500"
//           />
//           {errors.phone && (
//             <p className="text-red-500 text-xs">{errors.phone}</p>
//           )}

//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Comment / Message"
//             rows={3}
//             className="w-full border-b p-2 outline-none focus:border-purple-500"
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs">{errors.message}</p>
//           )}

//           <button
//             type="submit"
//             className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
//           >
//             SUBMIT →
//           </button>

//         </form>
//       </motion.div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Phone, MessageSquare, ArrowRight, CheckCircle, Home, BookOpen, Info, Mail, LogIn } from "lucide-react";

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [success, setSuccess] = useState(false);
//   const [focusedField, setFocusedField] = useState<string | null>(null);

// const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   setForm({
//     ...form,
//     [e.target.name]: e.target.value,
//   });

//   setErrors({
//     ...errors,
//     [e.target.name]: "",
//   });
// };



// const validate = () => {
//   let newErrors: any = {};

//   if (!form.first_name.trim()) {
//     newErrors.first_name = "First name is required";
//   } else if (form.first_name.length < 2) {
//     newErrors.first_name = "First name must be at least 2 characters";
//   }

//   if (!form.last_name.trim()) {
//     newErrors.last_name = "Last name is required";
//   }

//   if (!form.phone) {
//     newErrors.phone = "Phone number is required";
//   } else if (!/^[0-9]{10}$/.test(form.phone)) {
//     newErrors.phone = "Phone number must be 10 digits";
//   }

//   if (!form.message.trim()) {
//     newErrors.message = "Message is required";
//   } else if (form.message.length < 5) {
//     newErrors.message = "Message must be at least 5 characters";
//   }

//   return newErrors;
// };
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const validationErrors = validate();

//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }

//   setErrors({});

//   try {
//     const res = await fetch("https://codingcloud.pythonanywhere.com/register_msg/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         first_name: form.first_name,
//         last_name: form.last_name,
//         mobile: form.phone,
//         message: form.message,
//       }),
//     });

//     if (res.ok) {
//       setSuccess(true);

//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);

//       setForm({
//         first_name: "",
//         last_name: "",
//         phone: "",
//         message: "",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">


//       {/* Main Content */}
//       <div className="flex items-center justify-center p-4 md:p-8">
//         <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">

//           {/* Left Side - Attractive Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center md:text-left space-y-6"
//           >
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-5xl font-bold"
//             >
//               {/* <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                 Start Your
//               </span> */}
//               <br />
//               <span className="text-gray-800">Explore Our IT Training. Register For a Demo. Sign Up Now!</span>
//             </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-gray-600 text-lg"
//             >
// Discover innovation, expertise, and career advancement.
//             </motion.p>

//             {/* <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-wrap gap-4 justify-center md:justify-start"
//             >
//               {["Expert Instructors", "Lifetime Access", "Certificate"].map((item, index) => (
//                 <div key={item} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
//                   <CheckCircle className="w-5 h-5 text-purple-600" />
//                   <span className="text-gray-700">{item}</span>
//                 </div>
//               ))}
//             </motion.div> */}
//           </motion.div>

//           {/* Right Side - Registration Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20"
//           >
//             <h2 className="text-3xl font-bold mb-2 text-[var(--color-accent-purple)]">
//               Register Now
//             </h2>
//             <p className="text-gray-500 mb-8">Fill in your details to get started</p>

//           {success && (
//   <motion.div
//     initial={{ opacity: 0, y: -10 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2"
//   >
//     <CheckCircle className="w-5 h-5 text-green-600" />
//     <p className="text-green-700">
//       ✅ Registration successful! We'll contact you soon.
//     </p>
//   </motion.div>
// )}

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* First Name */}
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                   focusedField === 'first_name' ? 'text-purple-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={form.first_name}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('first_name')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="First Name"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 transition-all duration-300 bg-white/50"
//                 />
//                 {errors.first_name && (
//                   <motion.p 
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-500 text-xs mt-1 ml-2"
//                   >
//                     {errors.first_name}
//                   </motion.p>
//                 )}
//               </div>

//               {/* Last Name */}
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                   focusedField === 'last_name' ? 'text-purple-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={form.last_name}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('last_name')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Last Name"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 transition-all duration-300 bg-white/50"
//                 />
//                 {errors.last_name && (
//                   <motion.p 
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-500 text-xs mt-1 ml-2"
//                   >
//                     {errors.last_name}
//                   </motion.p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="relative">
//                 <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                   focusedField === 'phone' ? 'text-purple-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={form.phone}
//                   onChange={(e) => {
//                     const val = e.target.value.replace(/\D/g, "");
//                     setForm({ ...form, phone: val.slice(0, 10) });
//                   }}
//                   onFocus={() => setFocusedField('phone')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Phone Number"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 transition-all duration-300 bg-white/50"
//                 />
//                 {errors.phone && (
//                   <motion.p 
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-500 text-xs mt-1 ml-2"
//                   >
//                     {errors.phone}
//                   </motion.p>
//                 )}
//               </div>

//               {/* Message */}
//               <div className="relative">
//                 <MessageSquare className={`absolute left-3 top-5 w-5 h-5 transition-colors duration-300 ${
//                   focusedField === 'message' ? 'text-purple-600' : 'text-gray-400'
//                 }`} />
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('message')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Comment / Message"
//                   rows={3}
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 transition-all duration-300 bg-white/50 resize-none"
//                 />
//                 {errors.message && (
//                   <motion.p 
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-500 text-xs mt-1 ml-2"
//                   >
//                     {errors.message}
//                   </motion.p>
//                 )}
//               </div>

//               <motion.button
//   type="submit"
//   whileHover={{ scale: 1.02 }}
//   whileTap={{ scale: 0.98 }}
//   className="w-full rounded-xl group relative overflow-hidden text-white py-4 
//   bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)]
//   font-semibold text-lg hover:shadow-xl transition-all duration-300"
// >
//   <span className="relative z-10 flex items-center justify-center gap-2">
//     SUBMIT
//     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//   </span>

//   <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Elements */}

//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/component/ui/Button";
import { BASE_URL } from "@/lib/api";
import { showApiErrors } from "@/utility/apiError";
import Swal from "sweetalert2"; // (for success alert)
export default function RegisterPage() {

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: any = {};

  if (!form.first_name.trim()) newErrors.first_name = "First name is required";
  if (!form.last_name.trim()) newErrors.last_name = "Last name is required";

  if (!form.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (form.phone.length !== 10) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!form.message.trim()) newErrors.message = "Message is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  try {
    const res = await fetch(`${BASE_URL}/register_msg/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: form.first_name,
        last_name: form.last_name,
        mobile: form.phone,
        message: form.message,
      }),
    });

    const data = await res.json(); // ✅ IMPORTANT

    if (!res.ok) {
      setErrors(data);
      showApiErrors(data); // 🔥 HERE
      return;
    }

    // ✅ SUCCESS
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Registration successful!",
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    setForm({
      first_name: "",
      last_name: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      text: "Please try again later",
    });
  }
};

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center"
      style={{ backgroundImage: "url('/images/about/about-bg.jpeg')" }}
    >

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-white space-y-6 text-center lg:text-left"
          >

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Explore Our IT Training.
              <br />
              Register For a Demo.
              <br />
              <span className="text-blue-400">Sign Up Now!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
            >
              Discover innovation, expertise, and career advancement.
            </motion.p>

          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20"
          >

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--color-accent-purple)]">
              Register Now
            </h2>

            <p className="text-gray-500 mb-8">
              Fill in your details to get started
            </p>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 text-sm">
                  Registration successful! We'll contact you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* FIRST NAME */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${focusedField === "first_name" ? "text-purple-600" : "text-gray-400"}`} />
                  <input
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("first_name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="First Name"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 bg-white/60"
                  />
                </div>

                {/* Error message - only shows when there's an error */}
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.first_name}
                  </p>
                )}
              </motion.div>

              {/* LAST NAME */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${focusedField === "last_name" ? "text-purple-600" : "text-gray-400"}`} />
                  <input
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("last_name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Last Name"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 bg-white/60"
                  />
                </div>

                {/* Error message - only shows when there's an error */}
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.last_name}
                  </p>
                )}
              </motion.div>

              {/* PHONE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${focusedField === "phone" ? "text-purple-600" : "text-gray-400"}`} />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setForm({ ...form, phone: val.slice(0, 10) });
                    }}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 bg-white/60"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.phone}
                  </p>
                )}
              </motion.div>

              {/* MESSAGE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-5 w-5 h-5 ${focusedField === "message" ? "text-purple-600" : "text-gray-400"}`} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Comment / Message"
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-purple-500 bg-white/60 resize-none"
                  />
                </div>

                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.message}
                  </p>
                )}
              </motion.div>

              {/* BUTTON */}
              <div className="flex justify-center w-full">
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  SUBMIT →
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}