import React, { useState, useRef } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/compo.ui/button";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const form = useRef();

  const sended = () => {
    toast.success("Sent successfully", {
      position: "top-right",
    });
  };
  const failed = () => {
    toast.error("Not successfully", {
      position: "top-left",
    });
  };

  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue((last) => {
      return {
        ...last,
        [name]: value,
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(!formValue.fullname || !formValue.message) {
      toast.error("Feilds are not Filled!", {
        position: "top-right",
      });
      return;
    }

    emailjs
      .sendForm("service_hzlea5e", "template_eshg76k", form.current, {
        publicKey: "MihIgoW-U-3h6E0Fv",
      })
      .then(
        () => {
          sended();
          e.target.reset(); 
          console.log("SUCCESS!");
        },
        (error) => {
          failed();
          console.log("FAILED...", error.text);
        }
      );
  };
  
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(" message : ", formValue);
  //   sended();
  // };

  return (
    <>
      <div className=" text-white  bg-black">
        <h1 className="text-center text-[2rem] sm:text-[2.5rem] uppercase pt-7 tracking-wider font-semibold md:text-[3.5rem]">
          Contact
        </h1>
        <div className="flex pt-8 gap-6 md:gap-20  flex-col items-center md:flex-row px-10">
          <div className=" md:w-[40vw]  pl-3  flex items-r w-[80vw] flex-col  ">
            <h2 className="text-[#00BFFF] text-3xl md:text-5xl font-semibold text-start  ">
              {" "}
              Let's chat.{" "}
            </h2>
            <p className="pt-4 text-[#94A3AC] text-lg ">
              If you're looking for a dedicated developer with experience in
              React, Node.js, and other cutting-edge technologies, I'm eager to
              bring my skills to your team. Feel free to reach out to discuss
              how I can contribute to your projects."
            </p>

            <div className="pt-5">
              <div className="flex  pb-4 flex-row items-center  gap-4">
                <IoMdMailUnread className="text-xl  hover:text-white" />
                <a href="mailto:pawar85060@gmail.com">
                  <p className="hover:text-[#00BFFF] text-xl font-semibold ">
                    pawar85060@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex  pb-4 flex-row items-center  gap-4">
                <BsFillTelephoneOutboundFill className="text-xl " />
                <a href="tel:+918384006998">
                  <p className="hover:text-[#00BFFF] text-xl font-semibold  ">
                    +91 7289 934 666
                  </p>
                </a>
              </div>
              <div className="flex pb-4 flex-row items-center gap-4">
                <FaMapLocationDot className=" text-xl " />
                <p className="hover:text-[#00BFFF] text-xl font-semibold ">
                  Delhi,India
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-[40vw] md:mt-0 mt-10 mb-10 w-[80vw] ">
            <h3 className="text-center text-[#00BFFF] text-xl md:text-5xl font-semibold">
              {" "}
              Send us a Message 🚀
            </h3>
            <form
            ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center mt-10"
            >
              <div className="">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"

                  value={formValue.fullname}
                  onChange={onChangeHandler}
                  className="bg-purple-200 rounded-md outline-none border-2 border-purple-400 p-2 mb-7 text-md font-semibold h-10 text-[#042b38] w-[350px] *:placeholder:"
                  placeholder="Full name*"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="email"
                  value={formValue.email}
                  onChange={onChangeHandler}
                  name="email"
                  className="bg-purple-200 rounded-md outline-none border-2 border-purple-400 p-2 mb-7 text-md font-semibold h-10 text-[#042b38] w-[350px] *:placeholder:"
                  placeholder="Email*"
                />
              </div>
              <div className="">
                <textarea
                  name="message"
                  id="message"
                  value={formValue.message}
                  onChange={onChangeHandler}
                  className="bg-purple-200 rounded-md outline-none border-2 h-40 border-purple-400 p-2 mb-7 text-md font-semibold  text-[#042b38] w-[350px] *:placeholder:"
                  placeholder="Enter your Message* "
                ></textarea>
              </div>
              <Button
                variant="blue"
                className="hover:text-x w-44 font-serif text-xl "
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <ToastContainer
          autoClose={3000}
          position="top-right"
         
        />
      </div>
    </>
  );
}

export default Contact;
