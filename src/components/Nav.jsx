import { Share } from "lucide-react";

export const Nav = () => {
  const navElems = [
    {
      link: "Chat",
      href: "#",
      class:
        "relative before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:content-[''] before:bg-indigo-500",
    },
    {
      link: "New Session",
      href: "#",
      class:
        "relative before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:content-[''] before:bg-indigo-500",
    },
  ];

  // const toggleModal = () => setModalState(!modalState);
  return (
    <header className="flex sticky top-0 z-20 backdrop-blur-2xl p-6 rounded-b-2xl w-full">
      <div className="headerLeft flex flex-1 justify-start gap-2 ml-6">
        <span>[ </span>
        <a
          className="font-bold text-lg text-indigo-500 decoration-0 relative hover:-translate-y-1 transition-all duration-200 font-montserrat"
          href="#"
        >
          beamwatch
        </a>
        <span> ]</span>
      </div>
      <div className="headerRight flex-1 flex justify-end mr-6">
        <div className="dropdownBtnDiv relative flex gap-6 items-center">
          {navElems.map((item, idx) => (
            <a href={item.href} className={item.class} key={idx}>
              {item.link}
            </a>
          ))}
          <button className="flex items-center justify-center text-2xl px-4 py-1.5 border border-neutral-700 rounded-full cursor-pointer hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-200">
            <Share className={`transition-all duration-200 h-5 w-5 rotate-0`} />
          </button>
          {/* <div
            className={`absolute top-10 left-[50%] translate-x-[-50%] flex flex-col gap-5 w-auto bg-neutral-900 border rounded-2xl border-neutral-700 h-auto p-5 transition-all duration-200 hover:border-neutral-600 ${modalState ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <p>hiiiiiii</p>
          </div> */}
        </div>
      </div>
    </header>
  );
};
