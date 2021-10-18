import Manny from "./index";

// wrap everything inside a function scope and invoke it (IIFE, a.k.a. SEAF)
(() => {
  const manny = new Manny({
    container: "#canvas-container",
    useBackground: true,
  });
  window.manny = manny;

  manny.addLoot("book");
})();
