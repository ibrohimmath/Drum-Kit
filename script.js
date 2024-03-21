"use strict";


const isAlpha = function(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 && char.length <= 1;
};

document.addEventListener("keydown", function(e) {
  let char = e["key"].toUpperCase();
  if (!isAlpha(char)) return;
  char = char.charCodeAt(0);

  const audio = document.querySelector(`audio[data-key="${char}"]`);
  const buttonSelected = document.querySelector(`div[data-key="${char}"]`);
  
  if (!audio || !buttonSelected) {
    console.error("Audio or button element not found!");
    return;
  }
  
  // Event listener for resetting and playing audio
  audio.currentTime = 0;
  setTimeout(function() {
    audio.play();
  }, 30);
  if (!audio.paused) {
    audio.pause();
  }

  
  // Apply scale transformation and CSS class to buttonSelected
  setTimeout(function() {
    buttonSelected.style.transform = "scale(1.3)";
    buttonSelected.classList.add("scale--effect");
  }, 25);
  
  // Apply scale transformation and CSS class to buttonSelected with nested setTimeout
  setTimeout(function() {
    buttonSelected.style.transform = "scale(1.8)";
    buttonSelected.classList.add("scale--effect");
  
    setTimeout(function() {
      buttonSelected.style.transform = "scale(1)";
      buttonSelected.classList.remove("scale--effect");
    }, 25);
  }, 50);
  
});