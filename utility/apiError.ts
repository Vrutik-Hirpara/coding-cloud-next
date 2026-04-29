// import Swal from "sweetalert2";

// export const showApiErrors = (errors: any) => {
//   if (!errors) return;

//   let message = "";

//   Object.keys(errors).forEach((key) => {
//     if (Array.isArray(errors[key])) {
//       message += `${errors[key].join(", ")}\n`;
//     } else {
//       message += `${errors[key]}\n`;
//     }
//   });

//   Swal.fire({
//     icon: "error",
//     title: "Validation Error",
//     text: message.trim(),
//     customClass: {
//     popup: "z-[10000]" // 🔥 higher than modal
//   }
//   });
// };

import Swal from "sweetalert2";

export const showApiErrors = (errors: any) => {
  if (!errors) return;

  let message = "";

Object.keys(errors).forEach((key) => {
  const value = errors[key];

  // 🔥 case 1: array of characters (wrong backend format)
  if (Array.isArray(value) && value.every((v) => v.length === 1)) {
    message += value.join("") + " ";
  }

  // 🔥 case 2: normal array
  else if (Array.isArray(value)) {
    message += value.join(" ") + " ";
  }

  // 🔥 case 3: string
  else {
    message += value + "";
  }
});

  // last comma remove
  message = message.replace(/, $/, "");

Swal.fire({
  icon: "error",
  title: "Validation Error",
  text: message.trim(),
  customClass: {
    popup: "z-[10000]"
  }
});
};