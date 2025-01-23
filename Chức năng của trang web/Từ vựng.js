
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRtzFIQm8eav8ygZvOyS8LiPGfxuGyjmk",
  authDomain: "rienglish.firebaseapp.com",
  projectId: "rienglish",
  storageBucket: "rienglish.firebasestorage.app",
  messagingSenderId: "87731746835",
  appId: "1:87731746835:web:85f430b91ae5d841f9a7e6",
  measurementId: "G-5331QHBDZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let vocabularyGroups = {
  A1: [
  {
    word: "Accommodate",
    pronunciation: { US: "/əˈkɑː.mə.deɪt/", UK: "/əˈkɒm.ə.deɪt/" },
    meanings: [
      { en: "To provide space for someone or something.", vi: "Cung cấp không gian cho ai đó hoặc thứ gì đó." },
      { en: "To adapt to new circumstances.", vi: "Thích nghi với hoàn cảnh mới." },
    ],
    examples: [
      { en: "The hotel can accommodate up to 500 guests.", vi: "Khách sạn có thể chứa tới 500 khách." },
      { en: "We must accommodate the growing number of requests.", vi: "Chúng ta phải thích nghi với số lượng yêu cầu ngày càng tăng." },
    ],
    synonyms: ["Adjust", "Adapt", "House"],
    antonyms: ["Reject", "Deny"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Benefit",
    pronunciation: { US: "/ˈben.ə.fɪt/", UK: "/ˈben.ɪ.fɪt/" },
    meanings: [
      { en: "An advantage or profit gained from something.", vi: "Lợi ích hoặc lợi nhuận có được từ thứ gì đó." },
      { en: "To receive an advantage.", vi: "Nhận được lợi ích." },
    ],
    examples: [
      { en: "The benefit of regular exercise is well-documented.", vi: "Lợi ích của việc tập thể dục đều đặn đã được chứng minh rõ ràng." },
      { en: "We will all benefit from the new policy.", vi: "Chúng ta đều sẽ được lợi từ chính sách mới." },
    ],
    synonyms: ["Advantage", "Profit"],
    antonyms: ["Loss", "Harm"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Challenge",
    pronunciation: { US: "/ˈtʃæl.ɪndʒ/", UK: "/ˈtʃæl.ɪndʒ/" },
    meanings: [
      { en: "A difficult task or problem.", vi: "Một nhiệm vụ hoặc vấn đề khó khăn." },
      { en: "To invite someone to compete or argue.", vi: "Mời ai đó thi đấu hoặc tranh luận." },
    ],
    examples: [
      { en: "Climbing the mountain was a real challenge.", vi: "Leo núi thực sự là một thử thách." },
      { en: "I challenge you to solve this puzzle.", vi: "Tôi thách bạn giải câu đố này." },
    ],
    synonyms: ["Test", "Obstacle"],
    antonyms: ["Easy task", "Advantage"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Demand",
    pronunciation: { US: "/dɪˈmænd/", UK: "/dɪˈmɑːnd/" },
    meanings: [
      { en: "An insistent request.", vi: "Một yêu cầu kiên quyết." },
      { en: "To require something forcefully.", vi: "Đòi hỏi một cách mạnh mẽ." },
    ],
    examples: [
      { en: "The demand for electric cars is increasing.", vi: "Nhu cầu về xe điện đang tăng lên." },
      { en: "The workers demanded higher pay.", vi: "Công nhân yêu cầu tăng lương." },
    ],
    synonyms: ["Request", "Require"],
    antonyms: ["Offer", "Supply"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Effort",
    pronunciation: { US: "/ˈef.ɚt/", UK: "/ˈef.ət/" },
    meanings: [
      { en: "A vigorous or determined attempt.", vi: "Một nỗ lực mạnh mẽ hoặc quyết tâm." },
      { en: "The use of physical or mental energy.", vi: "Việc sử dụng năng lượng thể chất hoặc tinh thần." },
    ],
    examples: [
      { en: "He made an effort to finish the project on time.", vi: "Anh ấy đã nỗ lực hoàn thành dự án đúng hạn." },
      { en: "The team showed great effort during the match.", vi: "Đội đã thể hiện sự nỗ lực tuyệt vời trong trận đấu." },
    ],
    synonyms: ["Attempt", "Try"],
    antonyms: ["Neglect", "Inaction"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Encourage",
    pronunciation: { US: "/ɪnˈkɝː.ɪdʒ/", UK: "/ɪnˈkʌr.ɪdʒ/" },
    meanings: [
      { en: "To give support, confidence, or hope.", vi: "Để cung cấp sự hỗ trợ, tự tin hoặc hy vọng." },
      { en: "To stimulate the development of something.", vi: "Thúc đẩy sự phát triển của điều gì đó." },
    ],
    examples: [
      { en: "Her words encouraged me to keep going.", vi: "Những lời của cô ấy đã động viên tôi tiếp tục." },
      { en: "Parents should encourage their children to read.", vi: "Cha mẹ nên khuyến khích con cái đọc sách." },
    ],
    synonyms: ["Motivate", "Inspire"],
    antonyms: ["Discourage", "Deter"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Flexible",
    pronunciation: { US: "/ˈfleks.ə.bəl/", UK: "/ˈfleks.ɪ.bəl/" },
    meanings: [
      { en: "Capable of bending easily.", vi: "Có khả năng uốn cong dễ dàng." },
      { en: "Willing to change or compromise.", vi: "Sẵn lòng thay đổi hoặc thỏa hiệp." },
    ],
    examples: [
      { en: "Yoga can make your body more flexible.", vi: "Yoga có thể làm cơ thể bạn dẻo dai hơn." },
      { en: "She has a flexible schedule.", vi: "Cô ấy có một lịch trình linh hoạt." },
    ],
    synonyms: ["Adaptable", "Elastic"],
    antonyms: ["Rigid", "Inflexible"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Generate",
    pronunciation: { US: "/ˈdʒen.ə.reɪt/", UK: "/ˈdʒen.ə.reɪt/" },
    meanings: [
      { en: "To produce or create something.", vi: "Để tạo ra hoặc sản xuất thứ gì đó." },
      { en: "To cause something to exist.", vi: "Gây ra sự tồn tại của một điều gì đó." },
    ],
    examples: [
      { en: "Solar panels generate electricity.", vi: "Các tấm pin mặt trời tạo ra điện." },
      { en: "The news generated a lot of excitement.", vi: "Tin tức đã tạo ra rất nhiều sự phấn khích." },
    ],
    synonyms: ["Produce", "Create"],
    antonyms: ["Destroy", "Eliminate"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Hesitate",
    pronunciation: { US: "/ˈhez.ə.teɪt/", UK: "/ˈhez.ɪ.teɪt/" },
    meanings: [
      { en: "To pause before saying or doing something.", vi: "Ngần ngại trước khi nói hoặc làm điều gì đó." },
      { en: "To be uncertain or unwilling.", vi: "Do dự hoặc không sẵn lòng." },
    ],
    examples: [
      { en: "Don't hesitate to ask for help.", vi: "Đừng ngần ngại yêu cầu sự giúp đỡ." },
      { en: "He hesitated before answering the question.", vi: "Anh ấy ngập ngừng trước khi trả lời câu hỏi." },
    ],
    synonyms: ["Pause", "Wait"],
    antonyms: ["Proceed", "Advance"],
    image: "https://example.com/images/accommodate.jpg",
  },
  {
    word: "Improve",
    pronunciation: { US: "/ɪmˈpruːv/", UK: "/ɪmˈpruːv/" },
    meanings: [
      { en: "To make something better.", vi: "Làm cho thứ gì đó tốt hơn." },
      { en: "To enhance the quality of something.", vi: "Cải thiện chất lượng của thứ gì đó." },
    ],
    examples: [
      { en: "The company needs to improve its customer service.", vi: "Công ty cần cải thiện dịch vụ khách hàng." },
      { en: "Regular practice will improve your skills.", vi: "Thực hành đều đặn sẽ cải thiện kỹ năng của bạn." },
    ],
    synonyms: ["Enhance", "Upgrade"],
    antonyms: ["Worsen", "Degrade"],
    image: "https://example.com/images/accommodate.jpg",
  },
  // Add 10 more words similarly for the A1 group...
],
  A2: [
    {
      word: "Benefit",
      pronunciation: { US: "/ˈben.ə.fɪt/", UK: "/ˈben.ɪ.fɪt/" },
      meanings: [
        { en: "An advantage", vi: "Lợi ích" },
        { en: "To gain", vi: "Được lợi" },
      ],
      examples: [
        { en: "The benefit of exercise is well-known.", vi: "Lợi ích của việc tập thể dục đã được biết đến." },
        { en: "We all benefit from a good education.", vi: "Tất cả chúng ta đều được lợi từ một nền giáo dục tốt." },
      ],
      synonyms: ["Advantage", "Gain"],
      antonyms: ["Harm", "Disadvantage"],
      image: "https://example.com/images/accommodate.jpg",
    },
  ],
  B1: [],
  B2: [],
  C1: [],
  C2: [],
  // Add additional groups as needed...
};

// State for storing progress and user interactions
const state = {
  groups: {},
  selectedGroup: null, 
  progress: {
    A1: {
      notLearned: [],
      uncertain: [],
      learned: [],
    },
    A2: {
      notLearned: [],
      uncertain: [],
      learned: [],
    },
  },
};

function openGroupManagerModal() {
  const groupList = document.getElementById("group-list-manager");
  groupList.innerHTML = groupOrder
    .map(
      (group) => `
      <li>
        <span>${group}</span>
        <button onclick="moveGroupUp('${group}')">⬆ Lên</button>
        <button onclick="moveGroupDown('${group}')">⬇ Xuống</button>
        <button onclick="renameGroup('${group}')">Đổi tên</button>
        <button onclick="deleteGroup('${group}')">Xóa</button>
        <button onclick="copyGroup('${group}')">Sao chép</button>
      </li>`
    )
    .join("");
  document.getElementById("group-manager-modal").style.display = "block";
}

function closeGroupManagerModal() {
  document.getElementById("group-manager-modal").style.display = "none";
}

function addGroup() {
  const newGroupName = prompt("Nhập tên nhóm mới:");
  if (newGroupName && !vocabularyGroups[newGroupName]) {
    vocabularyGroups[newGroupName] = [];
    groupOrder.push(newGroupName); // Thêm nhóm mới vào cuối danh sách
    saveDataToLocalStorage();
    updateSidebarGroups();
    openGroupManagerModal();
  } else {
    alert("Tên nhóm đã tồn tại hoặc không hợp lệ.");
  }
}

function renameGroup(oldName) {
  const newName = prompt(`Đổi tên nhóm "${oldName}" thành:`);
  if (newName && !vocabularyGroups[newName]) {
    vocabularyGroups[newName] = vocabularyGroups[oldName];
    delete vocabularyGroups[oldName];
    saveDataToLocalStorage();
    updateSidebarGroups();
    openGroupManagerModal();
  } else {
    alert("Tên nhóm đã tồn tại hoặc không hợp lệ.");
  }
}

function deleteGroup(groupName) {
  if (confirm(`Bạn có chắc muốn xóa nhóm "${groupName}" không?`)) {
    delete vocabularyGroups[groupName];
    groupOrder = groupOrder.filter((group) => group !== groupName); // Xóa nhóm khỏi groupOrder
    saveDataToLocalStorage();
    updateSidebarGroups();
    openGroupManagerModal();
  }
}

function copyGroup(groupName) {
  const newGroupName = prompt(`Sao chép nhóm "${groupName}" thành nhóm mới tên:`);
  if (newGroupName && !vocabularyGroups[newGroupName]) {
    vocabularyGroups[newGroupName] = [...vocabularyGroups[groupName]];
    groupOrder.push(newGroupName); // Thêm nhóm mới vào cuối danh sách
    saveDataToLocalStorage();
    updateSidebarGroups();
    openGroupManagerModal();
  } else {
    alert("Tên nhóm đã tồn tại hoặc không hợp lệ.");
  }
}

let groupOrder = Object.keys(vocabularyGroups);

function moveGroupUp(group) {
  const index = groupOrder.indexOf(group);
  if (index > 0) {
    // Hoán đổi vị trí với nhóm phía trên
    [groupOrder[index], groupOrder[index - 1]] = [groupOrder[index - 1], groupOrder[index]];
    updateSidebarGroups(); // Cập nhật sidebar
    saveDataToLocalStorage();
    openGroupManagerModal(); // Cập nhật modal
  }
}

function moveGroupDown(group) {
  const index = groupOrder.indexOf(group);
  if (index < groupOrder.length - 1) {
    // Hoán đổi vị trí với nhóm phía dưới
    [groupOrder[index], groupOrder[index + 1]] = [groupOrder[index + 1], groupOrder[index]];
    updateSidebarGroups(); // Cập nhật sidebar
    saveDataToLocalStorage();
    openGroupManagerModal(); // Cập nhật modal
  }
}



function openFlashcardManagerModal() {
  const group = state.selectedGroup;
  if (!group) {
    alert("Hãy chọn một nhóm trước!");
    return;
  }

  const flashcardList = document.getElementById("flashcard-list");
  flashcardList.innerHTML = vocabularyGroups[group]
    .map(
      (flashcard, index) => `
      <li>
        <span>${flashcard.word}</span>
        ${flashcard.image ? `<img src="${flashcard.image}" alt="${flashcard.word}" style="max-height: 50px;"/>` : ""}
        <button onclick="editFlashcard(${index})">Sửa</button>
        <button onclick="deleteFlashcard(${index})">Xóa</button>
        <button onclick="moveFlashcard(${index})">Chuyển</button>
      </li>`
    )
    .join("");
  document.getElementById("flashcard-manager-modal").style.display = "block";
}

function closeFlashcardManagerModal() {
  document.getElementById("flashcard-manager-modal").style.display = "none";
}

function openAddFlashcardModal() {
  document.getElementById("add-flashcard-modal").style.display = "block";
}

function closeAddFlashcardModal() {
  document.getElementById("add-flashcard-modal").style.display = "none";
}

function addFlashcard() {
  const group = state.selectedGroup;
  if (!group) {
    alert("Hãy chọn một nhóm trước!");
    return;
  }

  const word = document.getElementById("word-input").value;
  const pronunciationUS = document.getElementById("pronunciation-us").value;
  const pronunciationUK = document.getElementById("pronunciation-uk").value;
  const meaningEN = document.getElementById("meaning-en").value;
  const meaningVI = document.getElementById("meaning-vi").value;
  const synonyms = document.getElementById("synonyms").value.split(",").map(s => s.trim());
  const antonyms = document.getElementById("antonyms").value.split(",").map(a => a.trim());
  const image = document.getElementById("image-url").value;

  if (!word) {
    alert("Vui lòng nhập từ!");
    return;
  }

  vocabularyGroups[group].push({
    word,
    pronunciation: { US: pronunciationUS, UK: pronunciationUK },
    meanings: [{ en: meaningEN, vi: meaningVI }],
    synonyms,
    antonyms,
    image
  });

  saveDataToLocalStorage();
  closeAddFlashcardModal();
  openFlashcardManagerModal();
}

function editFlashcard(index) {
  const group = state.selectedGroup;
  const flashcard = vocabularyGroups[group][index];

  const word = prompt("Nhập từ:", flashcard.word);
  const pronunciationUS = prompt("Phát âm (US):", flashcard.pronunciation.US);
  const pronunciationUK = prompt("Phát âm (UK):", flashcard.pronunciation.UK);
  const meaningEN = prompt("Nghĩa tiếng Anh:", flashcard.meanings[0].en);
  const meaningVI = prompt("Nghĩa tiếng Việt:", flashcard.meanings[0].vi);
  const synonyms = prompt("Từ đồng nghĩa (cách nhau bởi dấu phẩy):", flashcard.synonyms.join(",")).split(",");
  const antonyms = prompt("Từ trái nghĩa (cách nhau bởi dấu phẩy):", flashcard.antonyms.join(",")).split(",");
  const image = prompt("URL hình ảnh (nếu có):", flashcard.image);

  vocabularyGroups[group][index] = {
    word,
    pronunciation: { US: pronunciationUS, UK: pronunciationUK },
    meanings: [{ en: meaningEN, vi: meaningVI }],
    examples: [],
    synonyms,
    antonyms,
    image: image || flashcard.image,
  };

  saveDataToLocalStorage();
  openFlashcardManagerModal();
}

function deleteFlashcard(index) {
  const group = state.selectedGroup;
  if (confirm(`Bạn có chắc muốn xóa flashcard này không?`)) {
    vocabularyGroups[group].splice(index, 1);
    saveDataToLocalStorage();
    openFlashcardManagerModal();
  }
}

function moveFlashcard(index) {
  const group = state.selectedGroup;
  const targetGroup = prompt("Nhập tên nhóm muốn chuyển đến:");
  if (targetGroup && vocabularyGroups[targetGroup]) {
    const flashcard = vocabularyGroups[group].splice(index, 1)[0];
    vocabularyGroups[targetGroup].push(flashcard);
    saveDataToLocalStorage();
    openFlashcardManagerModal();
  } else {
    alert("Nhóm đích không tồn tại.");
  }
}

function updateSidebarGroups() {
  const sidebarGroupList = document.querySelector(".group-list");
  sidebarGroupList.innerHTML = groupOrder
    .map(
      (group) =>
        `<li class="group-item" onclick="loadRandomFlashcard('${group}')">${group}</li>`
    )
    .join("");
}


// Load random flashcard
function loadRandomFlashcard(group) {
  state.selectedGroup = group; // Cập nhật nhóm được chọn
  const groupWords = vocabularyGroups[group];

  if (!groupWords || groupWords.length === 0) {
    alert("Không có từ trong nhóm này!");
    return;
  }

  // Chọn từ ngẫu nhiên
  state.currentWordIndex = Math.floor(Math.random() * groupWords.length);

  // Hiển thị flashcard đầu tiên
  displayFlashcard(groupWords[state.currentWordIndex]);


}

// Display flashcard
function displayFlashcard(word) {
  if (!word) {
    alert("Không có từ để hiển thị.");
    return;
  }

  // Cập nhật nội dung flashcard
  document.getElementById("word-title").innerText = word.word;
  document.getElementById("word-pronunciation").innerText = `US: ${word.pronunciation.US}, UK: ${word.pronunciation.UK}`;
  document.getElementById("word-meaning").innerHTML = word.meanings
    .map((m) => `<p>${m.en} (${m.vi})</p>`)
    .join("");
  document.getElementById("examples").innerHTML = word.examples
    .map((ex) => `<p><strong>Ví dụ:</strong> ${ex.en} (${ex.vi})</p>`)
    .join("");
  document.getElementById("synonyms").innerText = word.synonyms.join(", ");
  document.getElementById("antonyms").innerText = word.antonyms.join(", ");

  // Hiển thị hình ảnh (nếu có)
  const wordImage = document.getElementById("word-image");
  if (word.image) {
    wordImage.src = word.image;
    wordImage.style.display = "block"; // Hiển thị hình ảnh
  } else {
    wordImage.style.display = "none"; // Ẩn hình ảnh nếu không có
  }
}

// Mark word with progress
function markWord(status) {
  const group = state.selectedGroup;
  const groupWords = vocabularyGroups[group];
  let currentWord;

  if (state.reviewWords && state.reviewWords.length > 0) {
    currentWord = state.reviewWords[state.currentReviewIndex];
  } else {
    currentWord = groupWords[state.currentWordIndex];
  }

  const wordLists = ["notLearned", "uncertain", "learned"];

  // Loại bỏ từ khỏi tất cả danh sách trong nhóm hiện tại
  wordLists.forEach((list) => {
    state.progress[group][list] = state.progress[group][list].filter((w) => w !== currentWord.word);
  });

  // Thêm từ vào danh sách tương ứng
  state.progress[group][status].push(currentWord.word);

  // Lưu tiến trình và cập nhật giao diện
  saveDataToLocalStorage();
  updateProgressUI();

  // Chuyển sang từ tiếp theo
  nextFlashcard();
}

function showWordList(status) {
  const group = state.selectedGroup;
  if (!group) {
    alert("Hãy chọn một nhóm từ!");
    return;
  }

  // Lấy danh sách từ từ tiến trình
  const wordList = state.progress[group][status];

  if (!wordList || wordList.length === 0) {
    alert("Không có từ nào trong nhóm này!");
    return;
  }

  // Cập nhật modal với danh sách từ
  const wordListContainer = document.getElementById("word-list-container");
  wordListContainer.innerHTML = wordList
    .map(
      (word) =>
        `<li onclick="showFlashcard('${word}')">${word}</li>`
    )
    .join("");

  // Hiển thị modal
  const modal = document.getElementById("word-list-modal");
  modal.style.display = "block";
}

function closeWordListModal() {
  const modal = document.getElementById("word-list-modal");
  modal.style.display = "none";
}

function showFlashcard(word) {
  const groupWords = vocabularyGroups[state.selectedGroup];
  const wordData = groupWords.find((w) => w.word === word);

  if (!wordData) {
    alert("Không tìm thấy từ này!");
    return;
  }

  // Hiển thị flashcard
  displayFlashcard(wordData);

  // Đóng modal
  closeWordListModal();
}

function updateProgressUI() {
  const group = state.selectedGroup;
  if (!group) return;

  const groupProgress = state.progress[group];
  const totalWords = vocabularyGroups[group]?.length || 0;

  const notLearnedCount = groupProgress.notLearned.length;
  const uncertainCount = groupProgress.uncertain.length;
  const learnedCount = groupProgress.learned.length;

  // Cập nhật số lượng từ
  document.getElementById("not-learned-list").innerText = `${notLearnedCount}`;
  document.getElementById("uncertain-list").innerText = `${uncertainCount}`;
  document.getElementById("learned-list").innerText = `${learnedCount}`;

  // Cập nhật thanh tiến trình
  const progressNotLearned = document.querySelector(".progress-not-learned");
  const progressUncertain = document.querySelector(".progress-uncertain");
  const progressLearned = document.querySelector(".progress-learned");

  const notLearnedPercent = totalWords > 0 ? (notLearnedCount / totalWords) * 100 : 0;
  const uncertainPercent = totalWords > 0 ? (uncertainCount / totalWords) * 100 : 0;
  const learnedPercent = totalWords > 0 ? (learnedCount / totalWords) * 100 : 0;

  progressNotLearned.style.width = `${notLearnedPercent}%`;
  progressUncertain.style.width = `${uncertainPercent}%`;
  progressLearned.style.width = `${learnedPercent}%`;

  // Cập nhật thông tin tiến trình
  const progressText = document.getElementById("progress-text");
  progressText.innerText = `${learnedCount}/${totalWords}`;
}

// Navigate flashcards
function nextFlashcard() {
  if (state.reviewWords && state.reviewWords.length > 0) {
    state.currentReviewIndex++;
    if (state.currentReviewIndex >= state.reviewWords.length) {
      alert("Bạn đã hoàn thành phiên ôn tập!");
      // Xóa trạng thái phiên ôn tập
      state.reviewWords = null;
      state.currentReviewIndex = 0;
      return;
    }
    displayFlashcard(state.reviewWords[state.currentReviewIndex]);
  } else {
    // Chế độ bình thường
    if (!state.selectedGroup) {
      alert("Hãy chọn một nhóm từ!");
      return;
    }

    const groupWords = vocabularyGroups[state.selectedGroup];
    if (!groupWords || groupWords.length === 0) {
      alert("Không có từ trong nhóm này!");
      return;
    }

    state.currentWordIndex = (state.currentWordIndex + 1) % groupWords.length;
    displayFlashcard(groupWords[state.currentWordIndex]);
  }
}

function prevFlashcard() {
  if (state.reviewWords && state.reviewWords.length > 0) {
    // Đang trong phiên ôn tập
    state.currentReviewIndex =
      (state.currentReviewIndex - 1 + state.reviewWords.length) % state.reviewWords.length;
    displayFlashcard(state.reviewWords[state.currentReviewIndex]);
  } else {
    // Chế độ bình thường
    const groupWords = vocabularyGroups[state.selectedGroup];
    state.currentWordIndex = (state.currentWordIndex - 1 + groupWords.length) % groupWords.length;
    displayFlashcard(groupWords[state.currentWordIndex]);
  }
}

function openReviewModal(status) {
  const group = state.selectedGroup;
  if (!group) {
    alert("Hãy chọn một nhóm từ!");
    return;
  }

  // Lấy danh sách từ từ tiến trình
  const wordList = state.progress[group][status];

  if (!wordList || wordList.length === 0) {
    alert("Không có từ nào trong danh sách này!");
    return;
  }

  // Tạo danh sách từ để chọn
  const reviewWordList = document.getElementById("review-word-list");
  reviewWordList.innerHTML = wordList
    .map(
      (word, index) => `
        <li>
          <label>
            <input type="checkbox" name="review-word" value="${word}" />
            ${word}
          </label>
        </li>
      `
    )
    .join("");

  // Lưu trạng thái hiện tại
  state.currentReviewStatus = status;

  // Hiển thị modal
  const modal = document.getElementById("review-modal");
  modal.style.display = "block";
}

function closeReviewModal() {
  const modal = document.getElementById("review-modal");
  modal.style.display = "none";
}

function startReviewSession() {
  const selectedWords = Array.from(document.querySelectorAll("input[name='review-word']:checked"))
    .map((input) => input.value);

  if (selectedWords.length === 0) {
    alert("Hãy chọn ít nhất một từ để ôn tập!");
    return;
  }

  // Lấy thông tin từ vựng của các từ đã chọn
  const groupWords = vocabularyGroups[state.selectedGroup];
  state.reviewWords = selectedWords
    .map((word) => groupWords.find((w) => w.word === word))
    .filter((w) => w);

  if (state.reviewWords.length === 0) {
    alert("Không tìm thấy từ vựng để ôn tập.");
    return;
  }

  // Đặt chỉ số từ hiện tại về 0
  state.currentReviewIndex = 0;

  // Đóng modal
  closeReviewModal();

  // Hiển thị flashcard đầu tiên trong phiên ôn tập
  displayFlashcard(state.reviewWords[state.currentReviewIndex]);
}


// Quiz functionality
function startQuiz(quizType, wordCount) {
  const group = state.selectedGroup;
  const groupWords = vocabularyGroups[group];
  
  if (!groupWords || groupWords.length === 0) {
    alert("Không có từ trong nhóm này!");
    return;
  }

  // Lấy số lượng từ cần cho quiz
  const selectedWords = groupWords.slice(0, wordCount);

  // Gọi hàm tương ứng với loại quiz
  if (quizType === 1) {
    matchWordToMeaning(selectedWords);
  } else if (quizType === 2) {
    multipleChoiceQuiz(selectedWords);
  } else if (quizType === 3) {
    arrangeLettersQuiz(selectedWords);
  }
}

function openModal(content) {
  const modal = document.getElementById("quiz-modal");
  const modalBody = document.getElementById("quiz-modal-body");

  modalBody.innerHTML = content; // Hiển thị nội dung quiz
  modal.style.display = "block"; // Hiển thị modal
}

function closeModal() {
  const modal = document.getElementById("quiz-modal");
  modal.style.display = "none"; // Ẩn modal
}

let draggedElement = null;

// Cho phép thả phần tử
function allowDrop(event) {
  event.preventDefault();
}

// Sự kiện kéo chuột
function drag(event) {
  draggedElement = event.target;
}

// Sự kiện thả chuột
function drop(event) {
  event.preventDefault();
  if (draggedElement && event.target.classList.contains("droppable")) {
    event.target.appendChild(draggedElement);
    draggedElement = null;
  }
}

// Sự kiện bắt đầu chạm
function touchStart(event) {
  draggedElement = event.target;
}

// Sự kiện di chuyển khi chạm
function touchMove(event) {
  event.preventDefault();
  const touchLocation = event.touches[0];
  draggedElement.style.position = "absolute";
  draggedElement.style.left = touchLocation.pageX + "px";
  draggedElement.style.top = touchLocation.pageY + "px";
}

// Sự kiện kết thúc chạm
function touchEnd(event) {
  const touchLocation = event.changedTouches[0];
  const dropTarget = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);

  if (dropTarget && dropTarget.classList.contains("droppable")) {
    dropTarget.appendChild(draggedElement);
    draggedElement.style.position = "static";
  }

  draggedElement = null;
}

// Gán sự kiện cho các phần tử draggable
document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('touchmove', touchMove);
});

function matchWordToMeaning(words) {
  const shuffledWords = [...words].sort(() => Math.random() - 0.5);
  const meanings = [...words].map((word) => word.meanings[0]).sort(() => Math.random() - 0.5);

  const quizHtml = `
    <h3>Hãy nối các từ sau với nghĩa của chúng:</h3>
    <div class="quiz-container">
      <div class="word-list">
        ${shuffledWords
          .map(
            (word, index) =>
              `<p id="word-${index}" class="draggable" draggable="true" 
                 ondragstart="drag(event)" 
                 ontouchstart="touchStart(event)">
                 ${word.word}
               </p>`
          )
          .join("")}
      </div>
      <div class="meaning-list">
        ${meanings
          .map(
            (meaning, index) =>
              `<div id="meaning-${index}" class="droppable" 
                 ondragover="allowDrop(event)" 
                 ondrop="drop(event)" 
                 ontouchend="touchEnd(event)">
                 <p>${meaning.en} (${meaning.vi})</p>
               </div>`
          )
          .join("")}
      </div>
      <button onclick="checkMatchQuiz()">Nộp bài</button>
    </div>
  `;

  // Hiển thị quiz trong modal
  openModal(quizHtml);
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedId);

  if (!event.target.classList.contains("droppable")) {
    alert("Hãy đưa vào phần ở dưới!");
    return;
  }

  // Di chuyển từ được kéo vào vùng thả
  event.target.appendChild(draggedElement);
}

function checkMatchQuiz() {
  const droppables = document.querySelectorAll(".droppable");
  let correctCount = 0;

  const results = Array.from(droppables).map((droppable) => {
    const wordElement = droppable.querySelector(".draggable");
    const meaning = droppable.dataset.meaning;

    if (wordElement && wordElement.dataset.word) {
      const word = wordElement.dataset.word;
      const wordData = Object.keys(vocabularyGroups)
        .flatMap((group) => vocabularyGroups[group])
        .find((w) => w.word === word);

      const isCorrect = wordData && wordData.meanings[0].en === meaning;
      if (isCorrect) correctCount++;
      return { word, meaning, meaningVi: wordData.meanings[0].vi, isCorrect };
    }

    return { word: "None", meaning, meaningVi: "None", isCorrect: false };
  });

  const resultHtml = results
    .map(
      (result) => `
      <p>
        <strong>${result.word}</strong> - <em>${result.meaning} (${result.meaningVi})</em>
        ${result.isCorrect ? `<span style="color: green;">✔</span>` : `<span style="color: red;">✘</span>`}
      </p>
    `
    )
    .join("");

  openModal(`
    <h3>Kết quả</h3>
    <p>Bạn đã nối chính xác ${correctCount} trong ${droppables.length} từ!</p>
    ${resultHtml}
    <button onclick="closeModal()">Đóng</button>
  `);
}



function multipleChoiceQuiz(words) {
  const quizHtml = words
    .map((word, index) => {
      const otherMeanings = Object.keys(vocabularyGroups)
        .flatMap((group) => vocabularyGroups[group])
        .filter((w) => w.word !== word.word)
        .map((w) => w.meanings[0]);

      const options = [
        word.meanings[0], // Nghĩa đúng
        ...otherMeanings.slice(0, 3), // 3 nghĩa sai
      ].sort(() => Math.random() - 0.5);

      return `
        <div class="quiz-item">
          <p><strong>${index + 1}. ${word.word}</strong></p>
          ${options
            .map(
              (option) =>
                `<label>
                  <input type="radio" name="question-${index}" value="${option.en}" />
                  ${option.en} (${option.vi})
                </label><br/>`
            )
            .join("")}
        </div>
      `;
    })
    .join("");

  openModal(`
    <h3>Hãy chọn nghĩa chính xác cho các từ sau:</h3>
    <form id="quiz-form">
      ${quizHtml}
      <button type="button" onclick="submitMultipleChoiceQuiz()">Nộp bài</button>
    </form>
  `);
}

function submitMultipleChoiceQuiz() {
  const form = document.getElementById("quiz-form");
  const questions = form.querySelectorAll(".quiz-item");
  let correctCount = 0;

  const results = Array.from(questions).map((question, index) => {
    const word = vocabularyGroups[state.selectedGroup][index];
    const correctAnswer = word.meanings[0].en;

    const selectedAnswer = form.querySelector(`input[name="question-${index}"]:checked`);
    const isCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;

    if (isCorrect) correctCount++;
    return {
      word: word.word,
      correctAnswer: `${word.meanings[0].en} (${word.meanings[0].vi})`,
      selectedAnswer: selectedAnswer
        ? `${selectedAnswer.value} (${word.meanings.find((m) => m.en === selectedAnswer.value)?.vi || "None"})`
        : "None",
      isCorrect,
    };
  });

  const resultHtml = results
    .map(
      (result) => `
      <p>
        <strong>${result.word}</strong>: <br>
        Câu trả lời của bạn: ${result.selectedAnswer} ${result.isCorrect ? `<span style="color: green;">✔</span>` : `<span style="color: red;">✘</span>`}<br>
        Đáp án: <em>${result.correctAnswer}</em>
      </p>
    `
    )
    .join("");

  openModal(`
    <h3>Kết quả</h3>
    <p>Bạn trả lời chính xác ${correctCount} trong ${questions.length} câu hỏi!</p>
    ${resultHtml}
    <button onclick="closeModal()">Đóng</button>
  `);
}

function arrangeLettersQuiz(words) {
  const quizHtml = words
    .map((word, index) => {
      const shuffled = word.word.split("").sort(() => Math.random() - 0.5);
      return `
        <div class="quiz-item">
          <p>${shuffled.join(" ")}</p>
          <input type="text" id="answer-${index}" placeholder="Hãy nhập câu trả lời ở đây" />
        </div>
      `;
    })
    .join("");

  // Mở modal với nội dung quiz
  openModal(`
    <h3>Hãy sắp xếp các xụm chữ cái sau thành từ có nghĩa:</h3>
    ${quizHtml}
    <button onclick="checkArrangeLettersQuiz()">Nộp bài</button>
  `);

}

function checkArrangeLettersQuiz() {
  const answers = document.querySelectorAll("input[id^='answer']");
  let correctCount = 0;

  const results = Array.from(answers).map((input, index) => {
    const word = vocabularyGroups[state.selectedGroup][index].word;
    const userAnswer = input.value.trim().toLowerCase();
    const isCorrect = userAnswer === word.toLowerCase();

    if (isCorrect) correctCount++;
    return { word, userAnswer, isCorrect };
  });

  // Hiển thị kết quả và đáp án
  const resultHtml = results
    .map(
      (result) => `
      <p>
        Word: <strong>${result.word}</strong><br>
        Câu trả lời của bạn: ${result.userAnswer || "None"} ${result.isCorrect ? `<span style="color: green;">✔</span>` : `<span style="color: red;">✘</span>`}<br>
        Đáp án: <em>${result.word}</em>
      </p>
    `
    )
    .join("");

  openModal(`
    <h3>Kết quả</h3>
    <p>Bạn đã sắp xếp đúng ${correctCount} trong ${answers.length} từ!</p>
    ${resultHtml}
    <button onclick="closeModal()">Đóng</button>
  `);
}



// Change UI theme
function changeTheme(theme) {
  document.body.className = theme;
}

// Search vocabulary
function searchVocabulary(query) {
  const results = [];
  Object.keys(vocabularyGroups).forEach((group) => {
    const groupWords = vocabularyGroups[group].filter((word) =>
      word.word.toLowerCase().includes(query.toLowerCase())
    );
    results.push(...groupWords);
  });

  const searchResults = document.getElementById("search-results");
  if (results.length === 0) {
    searchResults.innerHTML = "<p>Không có kết quả.</p>";
  } else {
    searchResults.innerHTML = results
      .map(
        (word) =>
          `<p class="search-item" onclick="showWordDetails('${word.word}')">${word.word}</p>`
      )
      .join("");
  }
}

function showWordDetails(word) {
  // Tìm từ trong tất cả các nhóm từ vựng
  let foundWord = null;
  Object.keys(vocabularyGroups).forEach((group) => {
    const wordData = vocabularyGroups[group].find((w) => w.word === word);
    if (wordData) {
      foundWord = wordData;
    }
  });

  // Hiển thị từ vựng trong flashcard nếu tìm thấy
  if (foundWord) {
    displayFlashcard(foundWord);
  } else {
    alert("Từ không tồn tại!");
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("not-learned").addEventListener("click", () => markWord("notLearned"));
    document.getElementById("uncertain").addEventListener("click", () => markWord("uncertain"));
    document.getElementById("learned").addEventListener("click", () => markWord("learned"));
    document.getElementById("search-bar").addEventListener("input", (e) => searchVocabulary(e.target.value));
  });


function changeTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Lưu trạng thái theme
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Lưu trạng thái theme
  }
}

// Tải theme khi khởi động
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  changeTheme(savedTheme);

  // Tải tiến trình từ localStorage
  loadDataFromLocalStorage();
});

const currentUser = localStorage.getItem('currentUser');

// Function to save vocabulary progress by user
function saveVocabularyProgress(group, status, word) {
  if (currentUser) {
    let userData = JSON.parse(localStorage.getItem(currentUser)) || {};
    userData.vocabularyProgress = userData.vocabularyProgress || {};
    userData.vocabularyProgress[group] = userData.vocabularyProgress[group] || { notLearned: [], uncertain: [], learned: [] };

    // Remove word from all lists
    Object.keys(userData.vocabularyProgress[group]).forEach(key => {
      userData.vocabularyProgress[group][key] = userData.vocabularyProgress[group][key].filter(w => w !== word);
    });

    // Add word to the appropriate list
    userData.vocabularyProgress[group][status].push(word);
    localStorage.setItem(currentUser, JSON.stringify(userData));
  } else {
    alert('Bạn cần đăng nhập để lưu tiến trình.');
    window.location.href = 'Đăng nhập.html';
  }
}

// Function to load vocabulary progress for the current user
function loadVocabularyProgress(group) {
  if (currentUser) {
    let userData = JSON.parse(localStorage.getItem(currentUser)) || {};
    return userData.vocabularyProgress?.[group] || { notLearned: [], uncertain: [], learned: [] };
  }
  return { notLearned: [], uncertain: [], learned: [] };
}

function resetData() {
  if (confirm("Bạn có chắc muốn xóa toàn bộ dữ liệu không?")) {
    localStorage.removeItem("flashcardAppData");
    location.reload(); // Tải lại trang để làm mới
  }
}

// Lưu tiến trình vào localStorage
function saveDataToLocalStorage() {
  const data = {
    vocabularyGroups, // Lưu danh sách nhóm và các flashcard bên trong
    groupOrder,       // Lưu thứ tự các nhóm (nếu có)
    progress: state.progress, // Lưu tiến trình học
  };

  localStorage.setItem("flashcardAppData", JSON.stringify(data));
}

// Tải tiến trình từ localStorage
function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem("flashcardAppData");
  if (savedData) {
    const data = JSON.parse(savedData);
    // Khôi phục dữ liệu
    vocabularyGroups = data.vocabularyGroups || {};
    groupOrder = data.groupOrder || Object.keys(vocabularyGroups);
    state.progress = data.progress || {};
  }
}

// Gọi khi tải trang
window.addEventListener("DOMContentLoaded", () => {
  loadDataFromLocalStorage();
  updateSidebarGroups(); // Cập nhật giao diện sidebar
  updateProgressUI();    // Cập nhật giao diện tiến trình
});

if (!localStorage.getItem('loggedIn')) {
  alert('Bạn cần đăng nhập để truy cập trang này.');
  window.location.href = 'Đăng nhập.html';
}
