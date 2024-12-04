export const checkRoute = (validPaths) => {
  const currentPath = window.location.pathname;

  if (!validPaths.includes(currentPath)) {
    window.location.href = "/not-found.html";
  }
};
