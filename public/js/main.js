const professionHero = document.querySelector("#profession-hero");
const wordsList = [
  "Web Developer.",
  "Virtual Assistant.",
  "Electrical and Electronic Engineer.",
];

let wordIndex = 0;
let characterIndex = 0;
let skipUpdate = 0;
let reverseType = false;

const intervalId = setInterval(() => {
  if (skipUpdate) {
    skipUpdate--;
    return;
  }

  if (!reverseType) {
    skipUpdate = 2;
    professionHero.innerText =
      professionHero.innerText + wordsList[wordIndex][characterIndex];
    characterIndex++;
  } else {
    professionHero.innerText = professionHero.innerText.slice(
      0,
      professionHero.innerText.length - 1
    );
    characterIndex--;
  }
  if (characterIndex === wordsList[wordIndex].length) {
    skipUpdate = 6;
    reverseType = true;
  }
  if (professionHero.innerText.length === 0 && reverseType) {
    reverseType = false;
    wordIndex++;
  }
  if (wordIndex === wordsList.length) {
    wordIndex = 0;
  }
}, 75);
