"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../component/privacyModal"
import PrivacyImage from "../assests/privacy_policy.png";

export default function Privacy() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
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
            Privacy
            <br />
            Policy
          </h2>
          <p className="text-sm md:text-base text-[#d3d3d3]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
          <button className="border border-[#82eefd] rounded-[12px] p-2 text-[#82eefd]" onClick={() => setModalShow(true)}>
            More Details
          </button>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={PrivacyImage}
            alt="privacy"
            className="max-w-[300px] md:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
