import { useState } from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
const ComingSoonPage = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const setMail = () => {
    if (input == "") {
      setMessage("Input Your Email in the Field");
    } else {
      setMessage("");
      setMessage("your Response has been processed succesfully");
      setInput("");
    }
  };
  return (
    <div>
      <div
        className={`relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url("https://i.pinimg.com/736x/50/af/47/50af474974cd004c120f8237a7c9e6a9.jpg")] text-center px-5`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div className="z-50 -mt-7 flex flex-col justify-center text-white w-full h-screen gap-y-24 md:gap-y-6">
          <div className="text-red-500 font-semibold text-md"> * {message}</div>
          <div className="flex flex-col gap-y-5">
            <span className="text-bold">LOGO</span>
            <h1 className="text-5xl md:text-7xl font-playfair">
              Site is Under Maintainace
            </h1>
            <p className="text-lg font-semibold">
              Stay tuned for something amazing!!!
            </p>
          </div>

          <div className="sm:mt-40">
            <form className="w-full max-w-xl mx-auto">
              <div className="flex items-center border-b border-indigo-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-200 text-xl font-semibold md:text-3xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="username@email.ext"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 bg-pink-300  text-lg font-semibold text-gray-900 py-3 px-4 rounded"
                  type="button"
                  onClick={setMail}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 flex gap-6 text-white mx-auto">
            <span className="flex text-lg font-semibold">
              Follow us on our Socials
            </span>
            <a
              href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21
"
            >
              <BsWhatsapp className="size-8  transition duration-300 ease-in-out  hover:text-black" />
              <p className="sr-only">Socials</p>
            </a>
            <a href="https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <BsInstagram className="size-8 transition duration-300 ease-in-out  hover:text-black" />
              <p className="sr-only">Socials</p>
            </a>
            <a href="#">
              <FaFacebook className="size-8 transition duration-300 ease-in-out  hover:text-black" />
              <p className="sr-only">Socials</p>
            </a>
            <a href="#">
              <FiYoutube className="size-8 transition duration-300 ease-in-out  hover:text-black" />
              <p className="sr-only">Socials</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
