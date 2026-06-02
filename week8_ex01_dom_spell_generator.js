const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const spellArea = document.getElementById('spellArea');
const ingredientsList = document.getElementById('ingredientsList');

const defaultSpellText = 'Your next spell will appear here...';
const ingredients = Array.from(ingredientsList.querySelectorAll('li')).map(
  (item) => item.textContent
);

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  const lightness = 55;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomIngredient() {
  const randomIndex = Math.floor(Math.random() * ingredients.length);
  return ingredients[randomIndex];
}

function setDefaultState() {
  spellArea.textContent = defaultSpellText;
  spellArea.style.backgroundColor = '#171f34';
  spellArea.style.color = '#f0f5ff';
}

function countdownAndShowSpell() {
  let currentCount = 3;
  spellArea.style.color = '#f0f5ff';

  const intervalId = setInterval(() => {
    if (currentCount > 0) {
      spellArea.textContent = `Summoning magic in ${currentCount}...`;
      currentCount -= 1;
    } else {
      clearInterval(intervalId);
      const ingredient = getRandomIngredient();
      spellArea.textContent = `✨ The spell calls upon: ${ingredient}! ✨`;
      spellArea.style.backgroundColor = getRandomColor();
      spellArea.style.color = '#0b1320';
    }
  }, 1000);
}

generateButton.addEventListener('click', () => {
  countdownAndShowSpell();
});

resetButton.addEventListener('click', () => {
  setDefaultState();
});

setDefaultState();
