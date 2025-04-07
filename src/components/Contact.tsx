import React from "react";
import Contact from "./ContactForm";

export default function Test() {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center">
          <div className="mx-auto">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
