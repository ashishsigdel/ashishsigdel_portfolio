import { useEffect } from "react";

export default function Modal({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-scroll flex items-start justify-center w-full mx-auto">
          <div className="fixed top-0 inset-0 bg-black/50 transition-opacity pointer-events-none backdrop:blur-lg"></div>
          {children}
        </div>
      )}
    </>
  );
}
