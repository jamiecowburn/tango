const WORDS = [
  {
    topic: "pointing words: this",
    answer: "これ",
    english: "this",
    level: "Beginner",
    note: "A common word used for something near the speaker."
  },
  {
    topic: "pointing words: that",
    answer: "それ",
    english: "that",
    level: "Beginner",
    note: "A common word used for something near the listener."
  },
  {
    topic: "question words: what",
    answer: "なに",
    english: "what",
    level: "Beginner",
    note: "Also pronounced なん in some phrases."
  },
  {
    topic: "question words: who",
    answer: "だれ",
    english: "who",
    level: "Beginner",
    note: "A common question word for asking about people."
  },
  {
    topic: "responses: yes",
    answer: "はい",
    english: "yes",
    level: "Beginner",
    note: "A common polite yes or acknowledgement."
  },
  {
    topic: "responses: no",
    answer: "いいえ",
    english: "no",
    level: "Beginner",
    note: "A common polite no."
  },
  {
    topic: "time words: not yet",
    answer: "まだ",
    english: "not yet",
    level: "Intermediate",
    note: "Can also mean still, depending on the sentence."
  },
  {
    topic: "describing words: very",
    answer: "とても",
    english: "very",
    level: "Intermediate",
    note: "Often used before adjectives."
  },
  {
    topic: "greetings: hello",
    answer: "こんにちは",
    english: "hello",
    level: "Beginner",
    note: "A daytime greeting. The final は is pronounced wa."
  },
  {
    topic: "polite phrases: thank you",
    answer: "ありがとう",
    english: "thank you",
    level: "Beginner",
    note: "A common casual thank-you."
  },
  {
    topic: "polite phrases: excuse me",
    answer: "すみません",
    english: "excuse me",
    level: "Beginner",
    note: "Also used for sorry or to get someone's attention."
  }
];

const KANA_GROUPS = [
  { name: "Basic", kana: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の"] },
  { name: "More", kana: ["は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"] },
  { name: "Dakuten", kana: ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"] },
  { name: "Small", kana: ["ゃ", "ゅ", "ょ", "っ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"] }
];

const ATTEMPTS = 6;

const board = document.querySelector("#board");
const topicText = document.querySelector("#topicText");
const lengthText = document.querySelector("#lengthText");
const levelText = document.querySelector("#levelText");
const message = document.querySelector("#message");
const selectedCellText = document.querySelector("#selectedCellText");
const kanaTabs = document.querySelector("#kanaTabs");
const kanaGrid = document.querySelector("#kanaGrid");
const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");
const newButton = document.querySelector("#newButton");
const helpButton = document.querySelector("#helpButton");
const helpDialog = document.querySelector("#helpDialog");

let puzzleIndex = 0;
let puzzle = WORDS[puzzleIndex];
let currentRow = 0;
let selectedCol = 0;
let guesses = [];
let gameOver = false;
let activeGroup = 0;
let kanaStates = new Map();

function characters(text) {
  return Array.from(text);
}

function newPuzzle(index = Math.floor(Math.random() * WORDS.length)) {
  puzzleIndex = index;
  puzzle = WORDS[puzzleIndex];
  currentRow = 0;
  selectedCol = 0;
  guesses = Array.from({ length: ATTEMPTS }, () => Array(characters(puzzle.answer).length).fill(""));
  gameOver = false;
  kanaStates = new Map();
  render();
  setMessage("Pick hiragana to build your guess.");
}

function render() {
  const length = characters(puzzle.answer).length;
  topicText.textContent = puzzle.topic;
  lengthText.textContent = `${length} hiragana`;
  levelText.textContent = puzzle.level;
  board.style.gridTemplateRows = `repeat(${ATTEMPTS}, 1fr)`;
  board.innerHTML = "";

  guesses.forEach((guess, rowIndex) => {
    const row = document.createElement("div");
    row.className = "row";
    row.style.gridTemplateColumns = `repeat(${length}, 1fr)`;

    guess.forEach((value, colIndex) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      cell.textContent = value;
      cell.setAttribute("aria-label", `Row ${rowIndex + 1}, cell ${colIndex + 1}`);
      if (rowIndex < currentRow || gameOver) cell.classList.add("locked");
      if (rowIndex === currentRow && colIndex === selectedCol && !gameOver) cell.classList.add("selected");
      const state = getCellState(rowIndex, colIndex);
      if (state) cell.classList.add(state);
      cell.addEventListener("click", () => selectCell(rowIndex, colIndex));
      row.append(cell);
    });

    board.append(row);
  });

  renderTabs();
  renderKana();
  selectedCellText.textContent = gameOver ? "Round finished" : `Cell ${selectedCol + 1}`;
}

function renderTabs() {
  kanaTabs.innerHTML = "";
  KANA_GROUPS.forEach((group, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab ${index === activeGroup ? "active" : ""}`;
    button.textContent = group.name;
    button.addEventListener("click", () => {
      activeGroup = index;
      render();
    });
    kanaTabs.append(button);
  });
}

function renderKana() {
  kanaGrid.innerHTML = "";
  KANA_GROUPS[activeGroup].kana.forEach((kana) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "kana";
    button.textContent = kana;
    const state = kanaStates.get(kana);
    if (state) button.classList.add(`used-${state}`);
    button.addEventListener("click", () => placeKana(kana));
    kanaGrid.append(button);
  });
}

function selectCell(row, col) {
  if (gameOver || row !== currentRow) return;
  selectedCol = col;
  render();
}

function placeKana(kana) {
  if (gameOver) return;
  guesses[currentRow][selectedCol] = kana;
  selectedCol = Math.min(selectedCol + 1, guesses[currentRow].length - 1);
  setMessage("");
  render();
}

function getCellState(row, col) {
  if (row >= currentRow) return "";
  const guess = guesses[row];
  const answer = characters(puzzle.answer);
  if (guess[col] === answer[col]) return "correct";
  if (answer.includes(guess[col])) return "present";
  return "absent";
}

function submitGuess() {
  if (gameOver) return;
  const guess = guesses[currentRow];
  if (guess.some((value) => !value)) {
    setMessage("Fill every cell before checking.");
    return;
  }

  updateKanaStates(guess);
  const guessText = guess.join("");
  const won = guessText === puzzle.answer;
  currentRow += 1;

  if (won) {
    gameOver = true;
    setMessage(`Correct: ${puzzle.answer} means ${puzzle.english}. ${puzzle.note}`);
  } else if (currentRow === ATTEMPTS) {
    gameOver = true;
    setMessage("Round finished. Start a new topic to keep practicing.");
  } else {
    selectedCol = 0;
    setMessage("Try again.");
  }

  render();
}

function updateKanaStates(guess) {
  const answer = characters(puzzle.answer);
  guess.forEach((kana, index) => {
    const next = kana === answer[index] ? "correct" : answer.includes(kana) ? "present" : "absent";
    const current = kanaStates.get(kana);
    if (current === "correct") return;
    if (current === "present" && next === "absent") return;
    kanaStates.set(kana, next);
  });
}

function clearRow() {
  if (gameOver) return;
  guesses[currentRow] = guesses[currentRow].map(() => "");
  selectedCol = 0;
  setMessage("Current row cleared.");
  render();
}

function setMessage(text) {
  message.textContent = text;
}

submitButton.addEventListener("click", submitGuess);
clearButton.addEventListener("click", clearRow);
newButton.addEventListener("click", () => newPuzzle((puzzleIndex + 1) % WORDS.length));
helpButton.addEventListener("click", () => helpDialog.showModal());

document.addEventListener("keydown", (event) => {
  if (gameOver) return;
  if (event.key === "Enter") submitGuess();
  if (event.key === "Backspace") {
    guesses[currentRow][selectedCol] = "";
    selectedCol = Math.max(0, selectedCol - 1);
    render();
  }
});

newPuzzle(0);
