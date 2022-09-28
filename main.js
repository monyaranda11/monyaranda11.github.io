function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

let myName = "Monica";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;

let myAge = 16;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;

let likesMusic = "true";
 let likesMusicText = "";

if(likesMusic === true) {
  likesMusicText = "me facina el punchis punchis"
}else{
  likesMusicText = "no me gusta el punchis punchis"
}

const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  if (e.repeat)return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeysIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }
  if (blackKeysIndex > -1) {
    playNote(blackKeys[blackKeysIndex]);
  }

});
