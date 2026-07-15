import { scrollToId } from "../utils/scrollToId.js";

function Footer() {
  function handleNavClick(e, target) {
    e.preventDefault();
    scrollToId(target);
  }

  return (
    <footer className="w-full bg-black py-4 mt-20">
      <p className="text-center text-white text-sm md:text-base">
        Copyright &#169; 2026 Saqlain Naqvi. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;