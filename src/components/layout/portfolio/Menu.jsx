import React from "react";
import Project from "./Project";
import Modal from "./Modal";
import { useState } from "react";

function Menu({ projects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleOpenModal = (project) => {
    setIsModalOpen((previousValue) => !previousValue);
    setModalData(project);
    preventBackgroundScroll();
  };
  const handleCloseModal = () => {
    setIsModalOpen((previousValue) => !previousValue);
    allowBackgroundScroll();
  };

  const preventBackgroundScroll = () =>
    document.body.classList.add("overflow-hidden");

  const allowBackgroundScroll = () =>
    document.body.classList.remove("overflow-hidden");

  return (
    <section
      className={`md:flex-center-center gap-6 flex-wrap pt-4 bg-blend-darken `}
    >
      {isModalOpen ? (
        <Modal handleCloseModal={handleCloseModal} projectData={modalData} />
      ) : null}
      {projects.map((project, index) => {
        return (
          <Project
            project={project}
            styles={`${
              projects.length % 3 !== 0 &&
              (projects.length == index + 1 || projects.length == index + 2)
                ? "md:grow-0"
                : "md:grow"
            }`}
            key={project.id}
            onClick={() => handleOpenModal(project)}
          />
        );
      })}
    </section>
  );
}

export default Menu;
