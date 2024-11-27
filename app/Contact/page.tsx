"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Contact from "../assests/contactUs.png";

export default function Privacy() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Check if the screen is large enough (>= 768px)
    };

    // Check on mount
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full relative">
        <div className="relative flex justify-center flex-col align-start p-6 h-full w-full md:w-1/2">
          {/* Background Trapezium Shape */}
          <div
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{
              clipPath: isLargeScreen
                ? "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" // Trapezium for large screens
                : "polygon(0 0, 100% 0, 50% 100%, 0% 100%)", // Full width tapering for smaller screens
              backgroundColor: "#bc8f8f",
            }}
          />
          <h2 className="text-4xl md:text-6xl text-[#82eefd] mb-4">
           Contact
            <br />
            Us
          </h2>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type your message here..."
              className="w-full p-3 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              SEND
            </button>
          </form>
        


        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Contact}
            alt="privacy"
            className="max-w-[300px] md:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
