export function scrollToId(id) {
  if (!id) return;

  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.warn('scrollToId: element not found for id:', id);
  }
}

export default scrollToId;
