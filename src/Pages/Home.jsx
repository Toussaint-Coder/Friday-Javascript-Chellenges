import { useState, useEffect, useRef } from "react"
import logo from "../assets/logo.png"

export default function Home() {
  const Email = useRef()
  console.log(Email)
  const handlerSubmit = () => {
    if (Email.current.value === "") {
      Email.current.focus()
      return
    }
  }
  return (
    <>
      <div className="w-full h-screen bg-[#0A1A3D] flex flex-col p-5 justify-between">
        <div className="w-full md:flex md:justify-between md:flex-row max-w-4xl mx-auto justify-center gap-4 items-center flex flex-col">
          <div className="font-bold text-lg">
            <img src={logo} alt="logo Icon" className="w-52" />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-sm px-2 py-1 text-sm outline-1 outline-blue-500 duration-100"
              ref={Email}
            />
            <button
              onClick={handlerSubmit}
              className="bg-[#1B47A4] px-2 py-1 rounded-sm text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className=" w-full flex items-center max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-white text-center">
              <h1 className="text-4xl">Today’s Challenge</h1>
            </div>
            <div>
              <p className="text-sm text-gray-400 text-center">
                Your task is to design and implement a captivating download
                button animation using HTML, CSS, and JavaScript. This animation
                should not only provide visual feedback to users upon
                interaction but also enhance the overall user experience during
                the download process. Through the seamless integration of HTML
                for structure, CSS for styling, and JavaScript for
                interactivity, your goal is to create an intuitive and
                aesthetically pleasing button that dynamically responds to user
                actions. The animation should include hover effects, click
                interactions, and loading indicators to signify the progress of
                the download.
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="https://codepen.io/Toussaint-Coder/pen/BaeZvVR"
                target="_blank"
              >
                <button className="bg-[#1B47A4] px-2 py-1 rounded-sm text-white">
                  View Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4 max-w-4xl mx-auto w-full">
          <a
            href="https://github.com/Toussaint-Coder"
            target="_blank"
            className="text-gray-400 text-sm"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/iradukunda-toussaint-1861a8261/"
            target="_blank"
            className="text-gray-400 text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@toussaintiradukunda4"
            target="_blank"
            className="text-gray-400 text-sm"
          >
            Medium
          </a>
        </div>
      </div>
    </>
  )
}
