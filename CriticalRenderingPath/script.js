// CRP
// created multiple CSS files to check why we call CSS as RENDER BLOCKING
// JS is called PARSER BLOCKING because it stop body tag html parsing, whenever we write script tag in head tag without async/defer (performance improvement) attributes

const child = document.querySelector(".child");
setTimeout(() => {
  child.style.color = "blue";
}, 5000);
