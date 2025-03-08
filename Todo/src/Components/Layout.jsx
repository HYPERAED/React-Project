import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center  bg-violet-500 min-h-screen ">
      <div className="w-[500px] max-w-2xl bg-white shadow-lg rounded-lg p-6 h-[550px] overflow-y-auto space-y-2 flex flex-col ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
