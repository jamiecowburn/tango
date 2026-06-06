const KANA_SETS = {
  hiragana: {
    label: "hiragana",
    title: "Hiragana",
    prompt: "Pick hiragana to build your guess.",
    words: [
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
    ],
    groups: [
      { name: "Basic", kana: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の"] },
      { name: "More", kana: ["は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"] },
      { name: "Dakuten", kana: ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"] },
      { name: "Small", kana: ["ゃ", "ゅ", "ょ", "っ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"] }
    ],
    chart: [
      ["あ a", "い i", "う u", "え e", "お o"],
      ["か ka", "き ki", "く ku", "け ke", "こ ko"],
      ["さ sa", "し shi", "す su", "せ se", "そ so"],
      ["た ta", "ち chi", "つ tsu", "て te", "と to"],
      ["な na", "に ni", "ぬ nu", "ね ne", "の no"],
      ["は ha", "ひ hi", "ふ fu", "へ he", "ほ ho"],
      ["ま ma", "み mi", "む mu", "め me", "も mo"],
      ["や ya", "", "ゆ yu", "", "よ yo"],
      ["ら ra", "り ri", "る ru", "れ re", "ろ ro"],
      ["わ wa", "", "", "", "を wo"],
      ["ん n", "", "", "", ""]
    ]
  },
  katakana: {
    label: "katakana",
    title: "Katakana",
    prompt: "Pick katakana to build your guess.",
    words: [
      {
        topic: "fast food: hamburger",
        answer: "ハンバーガー",
        english: "hamburger",
        level: "Beginner",
        note: "A borrowed English word often seen on menus."
      },
      {
        topic: "fast food: pizza",
        answer: "ピザ",
        english: "pizza",
        level: "Beginner",
        note: "A short borrowed food word written in katakana."
      },
      {
        topic: "drinks: coffee",
        answer: "コーヒー",
        english: "coffee",
        level: "Beginner",
        note: "The long sound mark ー stretches the vowel before it."
      },
      {
        topic: "drinks: juice",
        answer: "ジュース",
        english: "juice",
        level: "Beginner",
        note: "ジュ combines ジ with small ュ."
      },
      {
        topic: "clothing: shirt",
        answer: "シャツ",
        english: "shirt",
        level: "Beginner",
        note: "シャ combines シ with small ャ."
      },
      {
        topic: "clothing: coat",
        answer: "コート",
        english: "coat",
        level: "Beginner",
        note: "Common clothing vocabulary written in katakana."
      },
      {
        topic: "clothing: pants",
        answer: "パンツ",
        english: "pants",
        level: "Beginner",
        note: "A useful clothing word, especially in shopping topics."
      },
      {
        topic: "food: curry",
        answer: "カレー",
        english: "curry",
        level: "Beginner",
        note: "A common food word in Japanese written in katakana."
      },
      {
        topic: "dessert: ice cream",
        answer: "アイス",
        english: "ice cream",
        level: "Beginner",
        note: "A common shortened form of ice cream."
      },
      {
        topic: "transport: taxi",
        answer: "タクシー",
        english: "taxi",
        level: "Beginner",
        note: "A borrowed transport word written in katakana."
      }
    ],
    groups: [
      { name: "Basic", kana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ"] },
      { name: "More", kana: ["ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"] },
      { name: "Dakuten", kana: ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"] },
      { name: "Small", kana: ["ャ", "ュ", "ョ", "ッ", "ァ", "ィ", "ゥ", "ェ", "ォ"] },
      { name: "Marks", kana: ["ー"] }
    ],
    chart: [
      ["ア a", "イ i", "ウ u", "エ e", "オ o"],
      ["カ ka", "キ ki", "ク ku", "ケ ke", "コ ko"],
      ["サ sa", "シ shi", "ス su", "セ se", "ソ so"],
      ["タ ta", "チ chi", "ツ tsu", "テ te", "ト to"],
      ["ナ na", "ニ ni", "ヌ nu", "ネ ne", "ノ no"],
      ["ハ ha", "ヒ hi", "フ fu", "ヘ he", "ホ ho"],
      ["マ ma", "ミ mi", "ム mu", "メ me", "モ mo"],
      ["ヤ ya", "", "ユ yu", "", "ヨ yo"],
      ["ラ ra", "リ ri", "ル ru", "レ re", "ロ ro"],
      ["ワ wa", "", "", "", "ヲ wo"],
      ["ン n", "ー long", "", "", ""]
    ]
  }
};

const ATTEMPTS = 6;

const board = document.querySelector("#board");
const topicText = document.querySelector("#topicText");
const lengthText = document.querySelector("#lengthText");
const levelText = document.querySelector("#levelText");
const alphabetSelect = document.querySelector("#alphabetSelect");
const topicSelect = document.querySelector("#topicSelect");
const message = document.querySelector("#message");
const selectedCellText = document.querySelector("#selectedCellText");
const pickerLabel = document.querySelector("#pickerLabel");
const kanaTabs = document.querySelector("#kanaTabs");
const kanaGrid = document.querySelector("#kanaGrid");
const chartToggle = document.querySelector("#chartToggle");
const chartPanel = document.querySelector("#chartPanel");
const chartTitle = document.querySelector("#chartTitle");
const chartGrid = document.querySelector("#chartGrid");
const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");
const newButton = document.querySelector("#newButton");
const shareButton = document.querySelector("#shareButton");
const helpButton = document.querySelector("#helpButton");
const helpDialog = document.querySelector("#helpDialog");

let alphabet = "hiragana";
let puzzleIndex = 0;
let puzzle = currentWords()[puzzleIndex];
let currentRow = 0;
let selectedCol = 0;
let guesses = [];
let gameOver = false;
let activeGroup = 0;
let kanaStates = new Map();

function currentSet() {
  return KANA_SETS[alphabet];
}

function currentWords() {
  return currentSet().words;
}

function characters(text) {
  return Array.from(text);
}

function populateAlphabetSelect() {
  alphabetSelect.innerHTML = "";
  Object.entries(KANA_SETS).forEach(([key, set]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = set.title;
    alphabetSelect.append(option);
  });
}

function populateTopicSelect() {
  topicSelect.innerHTML = "";
  currentWords().forEach((word, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = word.topic;
    topicSelect.append(option);
  });
  topicSelect.value = String(puzzleIndex);
}

function newPuzzle(index = Math.floor(Math.random() * currentWords().length)) {
  puzzleIndex = index;
  puzzle = currentWords()[puzzleIndex];
  currentRow = 0;
  selectedCol = 0;
  guesses = Array.from({ length: ATTEMPTS }, () => Array(characters(puzzle.answer).length).fill(""));
  gameOver = false;
  kanaStates = new Map();
  hideShareButton();
  render();
  setMessage(currentSet().prompt);
}

function render() {
  const length = characters(puzzle.answer).length;
  topicText.textContent = puzzle.topic;
  lengthText.textContent = `${length} ${currentSet().label}`;
  levelText.textContent = puzzle.level;
  pickerLabel.textContent = `Choose ${currentSet().label}`;
  topicSelect.value = String(puzzleIndex);
  chartPanel.hidden = !chartToggle.checked;
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
  renderChart();
  selectedCellText.textContent = gameOver ? "Round finished" : `Cell ${selectedCol + 1}`;
}

function renderTabs() {
  kanaTabs.innerHTML = "";
  currentSet().groups.forEach((group, index) => {
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
  currentSet().groups[activeGroup].kana.forEach((kana) => {
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

function renderChart() {
  chartTitle.textContent = `${currentSet().title} chart`;
  chartGrid.innerHTML = "";
  currentSet().chart.flat().forEach((entry) => {
    const cell = document.createElement("div");
    cell.className = entry ? "chart-cell" : "chart-cell empty";
    cell.textContent = entry;
    chartGrid.append(cell);
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
    showShareButton(true);
  } else if (currentRow === ATTEMPTS) {
    gameOver = true;
    setMessage("Round finished. Start a new topic to keep practicing.");
    showShareButton(false);
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

function generateShareText(won) {
  const answer = characters(puzzle.answer);
  const totalAttempts = currentRow;
  const score = won ? String(totalAttempts) : "X";
  const header = `Tango — ${puzzle.english} (${currentSet().title})\n${score}/${ATTEMPTS}`;

  const rows = guesses.slice(0, totalAttempts).map((guess) => {
    return guess.map((kana, colIndex) => {
      if (kana === answer[colIndex]) return "🟩";
      if (answer.includes(kana)) return "🟨";
      return "⬜";
    }).join("");
  });

  return `${header}\n\n${rows.join("\n")}`;
}

function showShareButton(won) {
  shareButton.hidden = false;
  shareButton.dataset.won = won ? "1" : "0";
}

function hideShareButton() {
  shareButton.hidden = true;
  shareButton.textContent = "Share 📋";
}

populateAlphabetSelect();
populateTopicSelect();

alphabetSelect.addEventListener("change", () => {
  alphabet = alphabetSelect.value;
  puzzleIndex = 0;
  activeGroup = 0;
  populateTopicSelect();
  newPuzzle(0);
});
topicSelect.addEventListener("change", () => newPuzzle(Number(topicSelect.value)));
chartToggle.addEventListener("change", render);
submitButton.addEventListener("click", submitGuess);
clearButton.addEventListener("click", clearRow);
newButton.addEventListener("click", () => newPuzzle((puzzleIndex + 1) % currentWords().length));
helpButton.addEventListener("click", () => helpDialog.showModal());

shareButton.addEventListener("click", () => {
  const won = shareButton.dataset.won === "1";
  const text = generateShareText(won);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      shareButton.textContent = "Copied! ✓";
      setTimeout(() => { shareButton.textContent = "Share 📋"; }, 2200);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
});

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    shareButton.textContent = "Copied! ✓";
    setTimeout(() => { shareButton.textContent = "Share 📋"; }, 2200);
  } catch (e) {
    shareButton.textContent = "Copy failed";
  }
  document.body.removeChild(ta);
}

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
