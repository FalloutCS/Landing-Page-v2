export function observeElement(el, {callback, index}) {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(true, index)
      } else {
        callback(false, index)
      }
    });
  });
  observer.observe(el);
}
