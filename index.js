"use strict"

let allEmojiArr = ['hi', 'ok', 'bye'];

document.querySelector('#unshift-btn').addEventListener('click', unshiftEmj);
document.querySelector('#shift-btn').addEventListener('click', shiftEmj);
document.querySelector('#push-btn').addEventListener('click', pushEmj);
document.querySelector('#pop-btn').addEventListener('click', popEmj);

function unshiftEmj() {

    renderEmj();
}

function shiftEmj() {
    allEmojiArr.shift();
    renderEmj();
}

function pushEmj() {

    renderEmj();
}

function popEmj() {
    allEmojiArr.pop();
    renderEmj();
}


function renderEmj() {
    const emojiContainer = document.querySelector('#emoji-container');
    emojiContainer.innerHTML = "";
    for (let i = 0; i < allEmojiArr.length; i++) {
        emojiContainer.innerHTML += allEmojiArr[i] + ' ';
    }
}