import React, { useEffect, useState } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ProjectsData } from "./projectsData";
import InnerProj from "./parts/inner/InnerProj";
import Modal from "./parts/modal/Modal";
function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [screenWidth]);

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="text-white w-full mx-auto relative ">
      <h2 className={`text-5xl text-center py-6 md:py-12 mx-3 text-[#c9fd74]`}>
        Projects{" "}
      </h2>
      {!showModal && (
        <p className="mx-3 text-[#c9fd74] text-center">
          Click to see the live demo
        </p>
      )}
      <div className="flex justify-center mx-3 items-center flex-col capitalize cursor-pointer project ">
        {ProjectsData.map((project, index) => {
          return (
            <InnerProj
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
              href={project.href}
            />
          );
        })}
      </div>
      {showModal && <Modal modal={modal} projects={ProjectsData} />}
    </div>
  );
}

export default Projects;
