import { toast, TypeOptions } from "react-toastify";

const toastNotify = (message: string, type: TypeOptions = "success") => {
  toast(message, {
    type: type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

//https://fkhadra.github.io/react-toastify/introduction/
// toast.error('🦄 Wow so easy!', {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
//   transition: Bounce,
//   });
//https://fkhadra.github.io/react-toastify/installation
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

export default toastNotify;
