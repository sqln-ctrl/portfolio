import { useState, useEffect } from "react";
import { Home, User, FileText, Mail } from "lucide-react";
import { useIsDesktop } from "../hooks/useIsDesktop.js";
import { scrollToId } from "../utils/scrollToId.js";

const NAV_LINKS = [
  { target: "profile", label: "Home" },
  { target: "about", label: "About" },
  { target: "projects", label: "Projects" },
];

const COMPACT_LINKS = [
  { target: "profile", label: "Home", Icon: Home },
  { target: "about", label: "About", Icon: User }
];

const PILL_BASE =
  "fixed top-6 left-1/2 -translate-x-1/2 z-[1000] rounded-full transition-all duration-300 ease-in-out shadow-[0_8px_30px_rgba(0,0,0,0.35)]";

const SCROLL_THRESHOLD = 50;

function Navbar() {
  const isDesktop = useIsDesktop(1200);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    scrollToId(target);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  if (isDesktop) {
    return (
    <nav
      className={`${PILL_BASE} flex items-center ${
        isScrolled
          ? "bg-black/50  px-4 py-2 gap-4"
          : "bg-black  px-10 py-3 gap-10"
      }`}
    >
        <ul
          className={`flex items-center list-none m-0 p-0 ${
            isScrolled ? "gap-4" : "gap-10"
          }`}
        >
          {(isScrolled ? COMPACT_LINKS : NAV_LINKS).map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                aria-label={link.label}
                title={link.label}
                className="flex items-center justify-center text-white no-underline transition-colors duration-200 hover:text-gray-300"
              >
                {isScrolled ? (
                  <link.Icon size={20} />
                ) : (
                  link.label
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  if (!isDesktop) {
  if (isScrolled) {
    return (
      <nav
        className={`${PILL_BASE} flex items-center bg-black/50 px-4 py-2 gap-4`}
      >
        <ul className="flex items-center gap-4 list-none m-0 p-0">
          {COMPACT_LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                aria-label={link.label}
                title={link.label}
                className="flex items-center justify-center text-white hover:text-gray-300 transition-colors"
              >
                <link.Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`${PILL_BASE} bg-[#0a0e17] w-[calc(100%-3rem)] max-w-[480px] flex items-center justify-between px-4 py-2`}
    >
      <span className="text-lg font-semibold text-white">Menu</span>

      <div className="relative">
        <div
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          className="flex flex-col justify-between w-8 h-6 cursor-pointer"
        >
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[10px]" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          />
        </div>

        <ul
          className={`absolute right-0 top-[calc(100%+12px)] overflow-hidden rounded-2xl bg-[#0a0e17] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            isMenuOpen ? "max-h-[320px]" : "max-h-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="block whitespace-nowrap px-8 py-3 text-center text-gray-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
}
export default Navbar;