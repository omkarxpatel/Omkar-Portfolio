const title = document.querySelector('.home-text h2');
const text = ["Highschool Student", "Coder", "Musician", "Martial Artist"];
let b = 0;

function type() {
  let i = 0;
  const intervalId = setInterval(() => {
    title.textContent += text[b].charAt(i);
    i++;
    if (i >= text[b].length) {
        b = (b + 1) % text.length;

        clearInterval(intervalId);
        setTimeout(() => {
            deleteText();
        }, 1000);
    }
  }, 100);
}

function deleteText() {
  const intervalId = setInterval(() => {
    title.textContent = title.textContent.slice(0, -1);
    if (title.textContent.length === 1) {
      clearInterval(intervalId);
      setTimeout(() => {
        type();
      }, 1000);
    }
  }, 75);
}

type();
