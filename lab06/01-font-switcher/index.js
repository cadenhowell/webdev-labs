const makeBigger = () => {
   var contentStyle = document.querySelector(".content")
   var contentFontSize = parseFloat(getComputedStyle(contentStyle).fontSize);
   document.querySelector(".content").style.fontSize = (contentFontSize + 5) + "px";

   var h1Style = document.querySelector("h1")
   var h1FontSize = parseFloat(getComputedStyle(h1Style).fontSize);
   document.querySelector("h1").style.fontSize = (h1FontSize + 5) + "px";
};

const makeSmaller = () => {
   var contentStyle = document.querySelector(".content")
   var contentFontSize = parseFloat(getComputedStyle(contentStyle).fontSize);
   document.querySelector(".content").style.fontSize = (contentFontSize - 5) + "px";

   var h1Style = document.querySelector("h1")
   var h1FontSize = parseFloat(getComputedStyle(h1Style).fontSize);
   document.querySelector("h1").style.fontSize = (h1FontSize - 5) + "px";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
