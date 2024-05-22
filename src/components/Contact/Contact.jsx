import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2npqswy", "template_pg131y2", form.current, {
        publicKey: "0UTW79-arXkgY1G0K",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  function handleEmail() {
    window.location.href = `mailto:natnaelabebe1994@gmail.com`;
  }
  function handlePhone() {
    window.location.href = `tel:+251975434719`;
  }

  return (
    <div className="md:h-screen w-full">
      <h1 className="text-[#c9fd74] text-5xl py-10 text-center">
        Get in touch
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between ">
        <div className=" h-fit md:w-3/4 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex gap-2 flex-col justify-start p-4"
          >
            <div className="border-1 border-[#c9fd74] m-4 ">
              <input
                type=""
                placeholder="Name"
                name="user_name"
                required
                className="bg-transparent text-[#c9fd74] border-2 border-[#c9fd74]  outline-none placeholder:text-[#86966c] w-full indent-2 rounded-lg p-2 text-xl"
              />
            </div>
            <div className="border-1 border-[#c9fd74] m-4 mt-2">
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="bg-transparent text-[#c9fd74] border-2 border-[#c9fd74]  outline-none placeholder:text-[#86966c] w-full indent-2 rounded-lg p-2 text-xl"
                required
              />
            </div>
            <div className="border-2 border-[#c9fd74] m-4 mt-2 rounded-lg">
              <textarea
                name="message"
                rows={10}
                className="w-full border-none border-2 border-[#c9fd74]  bg-transparent outline-none text-[#c9fd74] indent-2 placeholder:text-[#86966c] p-2  text-xl"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="m-4 rounded-lg  mx-auto w-[95%]">
              <button
                type="submit"
                className="bg-[#c9fd74]  text-2xl p-2 w-full font-bold rounded-lg flex justify-center items-center"
              >
                Send
                <span className="">
                  <IoIosSend size={24} />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-6 w-[90%] mx-auto">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleEmail}
          >
            <div className="bg-[#c9fd74] p-4 rounded-full w-14 h-14 flex items-center justify-center">
              <MdOutlineMarkEmailRead size={30} />
            </div>
            <span className="text-[#c9fd74] text-2xl">
              natnaelabebe1994@gmail.com
            </span>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handlePhone}
          >
            <div className="bg-[#c9fd74] p-4 rounded-full w-14 h-14 flex items-center justify-center ">
              <FiPhone size={27} />
            </div>
            <span className="text-[#c9fd74] text-2xl">+251 975 434 719</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#c9fd74] p-4 rounded-full w-14 h-14 flex items-center justify-center">
              <ImLocation size={27} />
            </div>
            <span className="text-[#c9fd74] text-2xl">Kombolcha Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
