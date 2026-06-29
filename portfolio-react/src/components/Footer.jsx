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
      <nav className="flex justify-around items-center h-[17vh] max-[600px]:h-fit max-[600px]:mb-8">
        <div>
          <ul className="flex gap-8 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:text-center list-none text-lg max-[600px]:text-base m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.target}>
                <a href={`#${link.target}`} onClick={(e) => handleNavClick(e, link.target)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* TODO: replace name/year */}
      <p className="text-center">Copyright &#169; 2025 Aashay Wase. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
