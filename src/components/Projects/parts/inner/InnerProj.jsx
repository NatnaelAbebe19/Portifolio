import React from "react";

function InnerProj({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="text-white flex w-full py-[30px] px-[10] md:px-[30px] lg:px-[100px] items-center justify-between border-t border-[#c9fd74] innerProject"
    >
      <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-[500] m-0 ml-4">
        {title}
      </h2>
      <p className="font-[300] text-sm md:text-xl mr-4">Design & Development</p>
    </div>
  );
}

export default InnerProj;
