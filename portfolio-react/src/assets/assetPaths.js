// Centralized asset paths — drop your actual image/pdf files into
// /public/assets/ and these paths will resolve. (In Vite, anything in
// /public is served from the root "/" — no import needed.)

const ASSETS_BASE = '/assets';

export const assets = {
  profilePic: `${ASSETS_BASE}/profile-pic.png`,
  aboutPic: `${ASSETS_BASE}/about-pic.png`,
  logo: `${ASSETS_BASE}/logo.png`,

  experienceIcon: `${ASSETS_BASE}/experience.png`,
  educationIcon: `${ASSETS_BASE}/education.png`,
  arrowIcon: `${ASSETS_BASE}/arrow.png`,
  checkIcon: `${ASSETS_BASE}/checkmark.png`,
  linkedinIcon: `${ASSETS_BASE}/linkedin.png`,
  githubIcon: `${ASSETS_BASE}/github.png`,
  emailIcon: `${ASSETS_BASE}/email.png`,

  project1: `${ASSETS_BASE}/project-1.png`,
  project2: `${ASSETS_BASE}/project-2.png`,
  project3: `${ASSETS_BASE}/project-3.png`,

  resumePdf: `${ASSETS_BASE}/resume-example.pdf`,
};

export default assets;
