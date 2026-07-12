import { scrollToId } from '../utils/scrollToId.js';

const NAV_LINKS = [
  { target: 'about', label: 'About' },
  { target: 'experience', label: 'Experience' },
  { target: 'projects', label: 'Projects' },
  { target: 'contact', label: 'Contact' },
];

function Footer() {
  function handleNavClick(e, target) {
    e.preventDefault();
    scrollToId(target);
  }

  return (
    <footer className="h-[26vh] max-[600px]:h-[40vh] mx-4">
      
      {/* TODO: replace name/year */}
      <p className="text-center">Copyright &#169; 2026 Saqlain Naqvi. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
