import React, { useEffect } from "react";
import { useRef } from "react";
import Close from "/public/svg/Close";
import ExternalLink from "/public/svg/ExternalLink";
import Button from "../../Button";

function Modal({
  handleCloseModal,
  projectData: { title, img, info, externalLink },
}) {
  return (
    <main
      className={`modal`}
      onClick={(e) => {
        if (e.target.classList.contains("modal")) {
          handleCloseModal();
        }
      }}
    >
      {/* modal */}
      <section className=" w-4/5 h-4/5 pb-10 pt-12 bg-slate-900 rounded-lg overflow-hidden relative">
        {/* close-btn */}
        <Button
          styles={"absolute top-0 right-0 p-4 hover:bg-slate-800"}
          onClick={handleCloseModal}
        >
          <Close styles={"fill-white/60"} />
        </Button>
        <div className=" overflow-y-scroll h-full">
          <h2 className=" text-2xl text-center mb-4">{title}</h2>
          <section className="md:flex-center-between gap-6 px-10">
            {/* img container */}
            <div className="overflow-hidden self-start md:w-1/2 w-full rounded">
              <img src={img} alt="" />
            </div>
            {/* content */}
            <div className="h-full mt-4 self-start md:mt-0  md:w-1/2 w-full overflow-y-auto">
              {/* project data */}
              {Object.entries(info).map(([key, value], index) => {
                return (
                  <p key={index} className=" py-3  border-b-2 border-slate-800">
                    <span>{key}</span>: {value}
                  </p>
                );
              })}

              {externalLink == null || externalLink == "" ? null : (
                <Button
                  text={"external link"}
                  status="link"
                  styles={"flex-center-center mt-8 "}
                  onClick={() => window.open(`${externalLink}`, "_blank")}
                >
                  <ExternalLink
                    styles={"fill-fuchsia-600 inline ml-4 text-xl"}
                  />
                </Button>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Modal;
