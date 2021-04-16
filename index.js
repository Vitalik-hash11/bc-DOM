import docReady from "./utils/docReady";

docReady(() => {
  // DOM is loaded and ready for manipulation here
  // TODO: write your code here
  const root = document.getElementById("root");
  // remove next line
  root.innerText = "hello world";
});
