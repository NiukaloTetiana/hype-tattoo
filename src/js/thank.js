import "./header";

import { checkRoute } from "./router";

document.addEventListener("DOMContentLoaded", () => {
  const validPaths = ["/", "/thank"];
  checkRoute(validPaths);
});
