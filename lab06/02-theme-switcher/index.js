/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const removeThemes = () => {
   document.querySelector("body").classList.remove("desert");
   document.querySelector("body").classList.remove("ocean");
   document.querySelector("body").classList.remove("high-contrast");
};

const desert = () => {
   removeThemes();
   document.querySelector("body").classList.add("desert");
};

const ocean = () => {
   removeThemes();
   document.querySelector("body").classList.add("ocean");
};

const highContrast = () => {
   removeThemes();
   document.querySelector("body").classList.add("high-contrast");
};

document.querySelector("#default").addEventListener('click', removeThemes);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#high-contrast").addEventListener('click', highContrast);