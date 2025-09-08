// DOM Selection and Manipulation Practice - Cat Mood Tracker (Simple & Funny!)
// TODO: Complete the following DOM manipulation tasks

// Cat names for generating new cats
const catNames = [
  "Whiskers",
  "Mr. Fluffington",
  "Princess Mittens",
  "Sir Pounce-a-lot",
  "Captain Whiskers",
  "Lady Furriton",
  "Professor Meowington",
  "Duchess Fuzzycoat",
];

// TODO: DOM Selection Methods Practice
// Select important elements using querySelector() and querySelectorAll()

// TODO: Select the cat grid container
const catGrid = document.querySelector(".cat-grid");

// TODO: Select the "Add New Cat" button
const addCatBtn = document.querySelector("#add-cat-btn");

// TODO: Select the "Add Cat to Start" button
const prependCatBtn = document.querySelector("#prepend-cat-btn");

// TODO: Select the "Remove Last Cat" button
const removeLastCatBtn = document.querySelector("#remove-last-cat-btn");

// TODO: Select "Make All Happy" button
const makeAllHappyBtn = document.querySelector("#make-all-happy-btn");

// TODO: Select "Make All Grumpy" button
const makeAllGrumpyBtn = document.querySelector("#make-all-grumpy-btn");

// TODO: Select "Random Moods" button
const randomMoodsBtn = document.querySelector("#random-moods-btn");

// Stats elements
// TODO: Select happy count display
const happyCountDisplay = document.querySelector("#happy-count"); 

// TODO: Select grumpy count display
const grumpyCountDisplay = document.querySelector("#grumpy-count"); 

// TODO: Select sleepy count display
const sleepyCountDisplay = document.querySelector("#sleepy-count"); 

// TODO: Element Content Manipulation
function changeCatMood(button, newMood)
{
  // TODO: Find the parent cat card
  const catCard = button.closest(".cat-card"); // TODO: Use closest() or parentElement to find cat card

  // TODO: Find elements within the cat card to update
  // TODO: Find the cat face element
  const catFace = catCard.querySelector(".cat-face");
  // TODO: Find the cat mood text element
  const catMoodText = catCard.querySelector(".cat-mood");

  // TODO: Update the cat face emoji using textContent
  // Happy: 😸, Grumpy: 😾, Sleepy: 😴
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  catFace.textContent = moodEmojis[newMood]; 

  // TODO: Update the mood text using textContent
  // Capitalize first letter: 'happy' -> 'Happy'
  catMoodText.textContent = capitalizeFirstLetter(newMood);

  // TODO: Update the card's data attribute using setAttribute() - i.e. data-mood
  catCard.setAttribute("data-mood", newMood);

  // TODO: Update the card's CSS class using classList
  // Remove old mood classes, add new mood class
  catCard.classList.remove("mood-happy", "mood-grumpy", "mood-sleepy");
  catCard.classList.add(`mood-${newMood}`);

  // TODO: Update statistics after mood change
  updateMoodStatistics();
}

// TODO: DOM Structure Manipulation
function addNewCat()
{
  // TODO: Create a new cat card element using createElement()
  // TODO: Create div element
  const newCatCard = document.createElement("div");

  // TODO: Generate random cat data
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);
  const moodText = capitalizeFirstLetter(randomMood);

  // TODO: Set up the new cat card
  // use CreateElment
  // Add CSS class using classList.add()
  // Set data attribute using setAttribute()
  // Set innerHTML with cat content
  newCatCard.classList.add(".cat-card");
  newCatCard.setAttribute("data-mood", randomMood);

  // Example of using template literals
  // to create html structure (much faster than)
  // doing it with createElement etc
    const cardHTML = `
          <div class="cat-face">${moodEmojis[randomMood]}</div>
          <h3 class="cat-name">${randomName}</h3>
          <p class="cat-mood">${moodText}</p>
          <div class="mood-buttons">
              <button onclick="changeCatMood(this, 'happy')">😸 Happy</button>
              <button onclick="changeCatMood(this, 'grumpy')">😾 Grumpy</button>
              <button onclick="changeCatMood(this, 'sleepy')">😴 Sleepy</button>
          </div>
      `;

  // TODO: Set innerHTML and append to catGrid using appendChild()
  newCatCard.innerHTML = cardHTML;
  catGrid.appendChild(newCatCard);

  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Add cat to the beginning of the list
function addCatToStart() {
  // TODO: Create a new cat card element using createElement()
  const newCatCard = document.createElement("div"); // TODO: Create div element

  // TODO: Generate random cat data
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);

  const moodText = capitalizeFirstLetter(randomMood);

  // TODO: Set up the new cat card
  // Add CSS class using classList.add()
  // Set data attribute using setAttribute()
  // Set innerHTML with cat content

  // TODO: Use prepend() to add the cat to the beginning of catGrid
newCatCard.classList.add("cat-card");
newCatCard.setAttribute("data-mood", randomMood);

const cardHTML = `
          <div class="cat-face">${moodEmojis[randomMood]}</div>
          <h3 class="cat-name">${randomName}</h3>
          <p class="cat-mood">${moodText}</p>
          <div class="mood-buttons">
              <button onclick="changeCatMood(this, 'happy')">😸 Happy</button>
              <button onclick="changeCatMood(this, 'grumpy')">😾 Grumpy</button>
              <button onclick="changeCatMood(this, 'sleepy')">😴 Sleepy</button>
          </div>
      `;

      newCatCard.innerHTML = cardHTML;

      catGrid.prepend(newCatCard);
  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Remove the last cat from the list
function removeLastCat() {
  // TODO: Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll(".cat-card");

  // TODO: Check if there are any cats to remove
  if (allCats.length > 0) {
  const lastCat = allCats[allCats.length - 1];
  lastCat.remove();
  }

  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Remove individual cat (called from onclick in HTML)
function removeCat(button) {
  // TODO: Find the parent cat card using closest()
  const catCard = button.closest(".cat-card"); // TODO: Use closest('.cat-card') to find parent

  // TODO: Remove the cat card from the DOM
  catCard.remove();

  // TODO: Update statistics
  updateMoodStatistics();
}

// TODO: Attribute and Style Manipulation
function makeAllCatsHappy() {
  // TODO: Get all cat cards using querySelectorAll()
  const allCats = document.querySelectorAll(".cat-card");

  // TODO: Loop through each cat card
  // Update face emoji, mood text, data attribute, and CSS classes
  allCats.forEach((catCard) =>
{
    const catFace = catCard.querySelector(".cat-face");
    catFace.textContent = "😸";

    const catMoodText = catCard.querySelector(".cat=mood");
    catMoodText.textContent = "Happy";

    catCard.setAttribute("data-mood", "happy");

    catCard.classList.remove("mood-happy", "mood-grumpy", "mood-sleepy");
    catCard.classList.add("mood-happy");
});

  // TODO: Use forEach() to iterate through NodeList

  // TODO: Update statistics
  updateMoodStatistics();
}

function makeAllCatsGrumpy() {
  // TODO: Similar to makeAllCatsHappy but make them grumpy
  // Practice using querySelectorAll() and forEach()

  const allCats = document.querySelectorAll(".cat-card");

  allCats.forEach((catCard) => {
    const catFace = catCard.querySelector(".cat-face");
    catFace.textContent = "😾";

    const catMoodText = catCard.querySelector(".cat=mood");
    catMoodText.textContent = "Grumpy";

    catCard.setAttribute("data-mood", "grumpy");

    catCard.classList.remove("mood-happy", "mood-grumpy", "mood-sleepy");
    catCard.classList.add("mood-grumpy");
  });

  // TODO: Update statistics
  updateMoodStatistics();
}

function randomizeCatMoods() {
  // TODO: Get all cat cards
  // TODO: Loop through and assign random moods
  // TODO: Update each cat's display
  // TODO: Update statistics
  const allCats = document.querySelectorAll(".cat-card");
  const moods = ["happy", "grumpy", "sleepy"];
  const moodEmojis = { happy: "😸", grumpy: "😾", sleepy: "😴" };

  allCats.forEach((catCard) =>
{
    const randomMood = getRandomItem(moods);

    const catFace = catCard.querySelector(".cat-face");
    const catMoodText = catCard.querySelector(".cat-mood");

    catFace.textContent = moodEmojis[randomMood];
    catMoodText.textContent = capitalizeFirstLetter(randomMood);
    catCard.setAttribute("data-mood", randomMood);

    catCard.classList.remove("mood-happy", "mood-grumpy", "mood-sleepy");
    catCard.classList.add(`mood-${randomMood}`);
});

  updateMoodStatistics();
}

// TODO: Practical DOM Applications
function updateMoodStatistics() {
  // TODO: Count cats by mood using querySelectorAll()
  const happyCats = document.querySelectorAll('[data-mood="happy"]'); // TODO: Count cats with data-mood="happy"
  const grumpyCats = document.querySelectorAll('[data-mood="grumpy"]'); // TODO: Count cats with data-mood="grumpy"
  const sleepyCats = document.querySelectorAll('[data-mood="sleepy"]'); // TODO: Count cats with data-mood="sleepy"

  // TODO: Update the stat displays using textContent
  happyCountDisplay.textContent = happyCats.length;
  grumpyCountDisplay.textContent = grumpyCats.length;
  sleepyCountDisplay.textContent = sleepyCats.length;
}

//Helper Functions - Do not edit

function init() {
  setupEventListeners();
  updateMoodStatistics();
}

init();

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function capitalizeFirstLetter(inputString) {
  // just return empty string if we get garbage input
  if (!inputString || typeof inputString !== "string") {
    return "";
  }

  // grab the first letter and uppercase it
  const firstCharacter = inputString.charAt(0);
  const uppercaseFirstCharacter = firstCharacter.toUpperCase();

  // get everything else after the first letter
  const restOfString = inputString.slice(1);

  // stick them back together
  const capitalizedString = uppercaseFirstCharacter + restOfString;

  return capitalizedString;
}

// Event Listeners
function setupEventListeners() {
  // Add click event listeners to control buttons
  if (addCatBtn) addCatBtn.addEventListener("click", addNewCat);
  if (prependCatBtn) prependCatBtn.addEventListener("click", addCatToStart);
  if (removeLastCatBtn)
    removeLastCatBtn.addEventListener("click", removeLastCat);
  if (makeAllHappyBtn)
    makeAllHappyBtn.addEventListener("click", makeAllCatsHappy);
  if (makeAllGrumpyBtn)
    makeAllGrumpyBtn.addEventListener("click", makeAllCatsGrumpy);
  if (randomMoodsBtn)
    randomMoodsBtn.addEventListener("click", randomizeCatMoods);

  console.log("Event listeners set up successfully!");
}
