"use client"
import ListItem from "@/components/ListItem";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  // State variables for email form handling
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');

  // Function to validate email format
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.com$/;
    return re.test(email)
  }

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const emailInput = document.getElementById('email') as HTMLInputElement; 
    if(validateEmail(emailInput.value)) {
      setEmailError('')
      setSuccessMessage('Thanks for Signing up!')
      setFormSubmitted(true)
      setEmailValue(emailInput.value)
    } else {
      setEmailError('Valid email required');
    }
  
    // Function to handle input change
    const handleInputChange = () => {
      const inputValue = emailInput.value;
      if (validateEmail(inputValue)) {
        setEmailError('');
      } else {
        setEmailError('Valid email required');
      }
    };
  
    // Attach input event listener for email input
    emailInput.addEventListener('input', handleInputChange);
  }
  
  // const handleInputChange = (event: { target: { value: string; }; }) => {
  //   const inputValue = event.target.value;
  //   const isValidEmail = validateEmail(inputValue);
  //   if (isValidEmail) {
  //     setEmailError('');
  //   } else {
  //     setEmailError('Valid email required');
  //   }
  // };

  // Function to handle form submission success message dismissal
  const thanksForm = () => {
    setFormSubmitted(false)
    setSuccessMessage('');
  }

  return (
    <main className="flex min-h-screen items-center justify-center gap-10 overflow-hidden bg-gray-400">
     <div className="flex flex-col-reverse lg:flex-row bg-white lg:p-6 lg:gap-5 lg:rounded-3xl">
        {!formSubmitted && (
      <div className="flex flex-col lg:px-[2.6rem] justify-start py-[2rem] lg:py-[4.55rem] lg:max-w-[28.8rem]">
        <h1 className="font-bold text-5xl lg:text-[3.5rem] text-slate-800 pl-4 lg:pl-0">Stay updated!</h1>
        <p className="text-gray-700 font-medium text-base px-4 lg:px-0 py-4 lg:py-6 leading-[1.48rem]">Join 60,000+ product managers receiving monthly updates on:</p>
        <ListItem>Product discovery and building what matters</ListItem>
        <ListItem>Measuring to ensure updates are a success</ListItem>
        <ListItem>And much more!</ListItem>

        <form className="w-full pl-[1.1rem] lg:pl-0 pr-[1.1rem] lg:pr-0 pt-[2rem] mx-auto" onSubmit={handleSubmit} noValidate>
  <div className="mb-5">
    <label htmlFor="email" className="flex mb-2 text-[0.8rem] text-left font-bold justify-between text-gray-900">Email Address
    {emailError && (<span className="text-sm font-semibold text-red-500">{emailError}</span>)}
    </label>
    <input 
      type="email" 
      id="email" 
      className={`bg-gray-50 border border-gray-400 text-base rounded-lg text-gray-900 
focus:outline-none w-full px-6 p-4 ${emailError ? 'placeholder-red-500 text-red-500 border-red-500 focus:border-red-500' : ''}`} 
      placeholder="email@company.com"  
      />

  </div>
    <button type="submit" className="text-white bg-slate-800 hover:bg-red-500 font-semibold rounded-lg text-lg md:text-base w-full py-4 text-center transition duration-500 shadow-md hover:shadow-md hover:shadow-red-500 ease-linear ">Subscribe to monthly newsletter</button>
  </form>
      </div>
  )}  {!formSubmitted && (
    <div className="flex">
      <Image 
        src="/assets/images/illustration-sign-up-mobile.svg" 
        alt="" 
        width={24} 
        height={24} 
        className="block lg:hidden w-full filter saturate-100"/>
      <Image 
        src="/assets/images/illustration-sign-up-desktop.svg" 
        alt="" 
        width={100} 
        height={100} 
        className="hidden lg:block w-[25rem] h-[37.0625rem] filter saturate-100"/>
    </div>
  )}
      {formSubmitted && (
        <div className={`tracking-tight flex flex-col h-screen justify-between lg:h-auto p-8 lg:max-w-[28rem]`}>
          <div className="my-[8rem] lg:my-0">
         <Image src="/assets/images/icon-success.svg" alt="" width={50} height={50} className="pb-4 lg:pb-0"/>
           <h2 className="font-bold my-4 text-left text-4xl lg:text-5xl text-slate-800 tracking-wider">
           <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">Thanks</span></span> for subscribing!</h2>
         <p className="text-base font-poppins mt-1 text-left text-black">A confirmation email has been sent to <span className="font-bold text-black">{emailValue}</span>. Please open it and click the button inside to confirm your subscription.</p>
          </div>
           <button type="button" onClick={thanksForm} id="dismiss" className={`lg:max-w-[24rem] font-medium text-lg lg:mt-8 py-4 text-center bg-slate-800 rounded-lg text-white cursor-pointer hover:bg-red-500 duration-500`}> Dismiss message
           </button>
         </div>
           )}
     </div>
    </main>
  );
}