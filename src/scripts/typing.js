const title = document.querySelector('.home-text h2');
const text = ["Highschool Student", "Coder", "Musician", "Martial Artist"];
let b = 0;
let i = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    title.textContent += text[b].charAt(i);
    i++;

    if (i >= text[b].length) {
      isTyping = false;
      setTimeout(() => {
        deleteText();
      }, 1000);
    }
  }
}

function deleteText() {
  if (!isTyping) {
    if (title.textContent.length > 0) {
      title.textContent = title.textContent.slice(0, -1);
    } else {
      b = (b + 1) % text.length;
      i = 0;
      isTyping = true;
      setTimeout(() => {
        type();
      }, 1000);
    }
  }
}

setInterval(() => {
  type();
}, 100);

// Initial call to start typing
type();
