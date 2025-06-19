import React from "react";

const FooterComponent = () => {
  return (
    <div className="">
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} Biccobs. All rights reserved.
      </footer>
    </div>
  );
};

export default FooterComponent;
