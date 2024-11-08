import { useEffect } from "react";
import clsx from "clsx";



export function Modal({ showModal, closeModal, className, children }) {
  // modal close on press escape key
  useEffect(() => {
    function handleKeyDown(event) {
      console.log("event", event.key);

      if (event.key === "Escape") {
        console.log("event", event.key);
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  //

  return showModal ? (
    //
    // top-0 left-0 bottom-0 right-0
    <div className="fixed  inset-0  z-50 flex justify-center items-center  backdrop-blur-sm  ">
      <div
        className={clsx(
          "bg-white w-full max-w-md overflow-hidden rounded-lg shadow-lg p-2 border-[1px] ",
          className
        )}
      >
        {children}
      </div>
    </div>
  ) : null;
}