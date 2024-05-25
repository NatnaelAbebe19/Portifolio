import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import emailjs from "@emailjs/browser";
import AnimatedCursor from "react-animated-cursor";

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
    <div
      id="Contacts"
      className="h-screen w-full flex flex-col justify-between"
    >
      <AnimatedCursor
        innerSize={0}
        outerSize={20}
        color="201,253,116"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={["a", "p", "button"]}
      />
      <div className="text-[#c9fd74] flex flex-col justify-center items-center h-full gap-y-20 md:gap-y-30">
        <div className="text-center text-sm tracking-widest ">
          I'M ALWAYS HAPPY TO TALK. <br />
          AVAILABLE FOR FREELANCE WORK
        </div>
        <p onClick={handleEmail} className="capitalize text-6xl send">
          <span className="font-Migra">send</span>{" "}
          <span className="font-MigraItalic lowercase font-light">an</span>{" "}
          <span className="font-Migra lowercase">email</span>
        </p>
      </div>

      <div className="flex  flex-col md:flex-row md:justify-between ">
        <div className="ml-4 uppercase text-[#c9fd74] flex gap-x-6 pb-12">
          <a href="https://x.com/Natnael163260" target="_blank" className="">
            twitter
          </a>
          <a
            href="https://www.instagram.com/nathaniel_abebe/"
            target="_blank"
            className=""
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-abebe-57a079295/"
            target="_blank"
            className=""
          >
            Linkedin
          </a>
        </div>
        <div className="text-[#c9fd74] flex gap-x-4 uppercase  ml-4">
          <a href="https://t.me/NatnaelAbebe" target="_blank" className="">
            By Natnaels
          </a>
          <a onClick={handlePhone} className="">
            Call Me
          </a>
          <span className="">&copy;2024</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/*

    <div id="Contacts" className="md:h-screen w-full">
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
*/
