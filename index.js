"use strict"

const emojiInput = document.querySelector('#emoji-input');
let allEmojiArr = [];

document.querySelector('#unshift-btn').addEventListener('click', unshiftEmj);
document.querySelector('#shift-btn').addEventListener('click', shiftEmj);
document.querySelector('#push-btn').addEventListener('click', pushEmj);
document.querySelector('#pop-btn').addEventListener('click', popEmj);
document.querySelector('#happy-btn').addEventListener('click', function() {
    getRandomEmoji(random.happyArr);
});
document.querySelector('#emotion-btn').addEventListener('click', function() {
    getRandomEmoji(random.emotionArr);
});


function unshiftEmj() {
    if (emojiInput.value) {
        allEmojiArr.unshift(emojiInput.value);
        emojiInput.value = "";
        renderEmj();
        console.log(allEmojiArr);
    }
}

function shiftEmj() {
    allEmojiArr.shift();
    renderEmj();
}

function pushEmj() {
    if (emojiInput.value) {
        allEmojiArr.push(emojiInput.value);
        emojiInput.value = "";
        renderEmj();
    }
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

let random = {
    happyArr: ["😀", "😁", "😆", "😎", "😊", "🤗"],
    emotionArr: ["🤨", "😟", "😡", "🤯", "🤭", "😭", "😍"],
};

function getRandomEmoji(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomEmoji = arr[randomIndex];
    allEmojiArr.push(randomEmoji);
    renderEmj();
}
