import React, { useState } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ProjectsData } from "./projectsData";
import InnerProj from "./parts/inner/InnerProj";
import Modal from "./parts/modal/Modal";
function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="text-white w-full mx-auto relative">
      <h2 className="text-5xl text-center py-12">Projects </h2>
      <div className="flex justify-center items-center flex-col capitalize cursor-pointer project">
        {ProjectsData.map((project, index) => {
          return (
            <InnerProj
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={ProjectsData} />
    </div>
  );
}

export default Projects;
