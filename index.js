"use strict"

let myEmojis = [];
const emojiInput = document.querySelector('#emoji-input');
const unshiftBtn = document.querySelector('#unshift-btn');
const pushBtn = document.querySelector('#push-btn');
const shiftBtn = document.querySelector('#shift-btn');
const popBtn = document.querySelector('#pop-btn');
const emojiContainer = document.querySelector('#emoji-container');

function renderEmojis() {
   let emojisLooped = '';
   for (let i = 0; i < myEmojis.length; i++) {
      emojisLooped += `${myEmojis[i]} `
   }
   emojiContainer.innerHTML = emojisLooped;
}

renderEmojis();

unshiftBtn.addEventListener('click', function() {
   if (emojiInput.value) {
      myEmojis.unshift(emojiInput.value);
   }
   renderEmojis();
   emojiInput.value = "";
})

pushBtn.addEventListener('click', function() {
   if (emojiInput.value) {
      myEmojis.push(emojiInput.value);
   }
   renderEmojis();
   emojiInput.value = "";
})

shiftBtn.addEventListener('click', function() {
   myEmojis.shift();
   renderEmojis();
})

popBtn.addEventListener('click', function() {
   myEmojis.pop();
   renderEmojis();
})

