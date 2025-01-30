const question = document.getElementById("question");
const emoji = document.getElementById("emoji");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const questions = [
  "Do you love me?",
  "Think again, do you really love me?",
  "Don't be shy, just say Yes!",
  "Come on, I know you do!",
  "Why are you hesitating? Say Yes!",
  "Still no? Think about it again!",
  "I'm waiting for your Yes!",
  "You can't avoid this question forever!",
  "One last chance: Do you love me?"
];

const emojis = ["❤️", "🥰", "🌹", "💕", "😍", "😘", "🐻", "🌸", "💖"];

let count = 0;

noBtn.addEventListener("click", () => {
  if (count < questions.length - 1) {
    question.innerText = questions[++count];
    emoji.innerText = emojis[count % emojis.length];
  } else {
    question.innerText = "You have no other option, say Yes!";
    emoji.innerText = "💌";
  }

  // Move the "No" button to a random position
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});

yesBtn.addEventListener("click", () => {
  question.innerText = "I knew it! You love me ❤️😘";
  emoji.innerText = "💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
