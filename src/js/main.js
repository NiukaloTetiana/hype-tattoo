import "./header";
import "./artist";
import "./feedback";
import "./modal";
import "./router";
import { checkRoute } from "./router";

document.addEventListener("DOMContentLoaded", () => {
  const validPaths = ["/", "/thank"];
  checkRoute(validPaths);
});
