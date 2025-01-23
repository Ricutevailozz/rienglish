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

let exerciseData = {
    grammar: {
        "Các thì cơ bản": {
            "Bài 1": {
                "Đề 1": [
            { type: "tracnghiem", question: "She _______ to school every day.", options: ["go", "goes", "going"], answer: "goes" },
            { type: "dienchu", question: "He _______ (to eat) dinner now.", answer: "is eating" },
            { 
                type: "audio", 
                question: "Nghe và trả lời các câu hỏi sau.", 
                audio: "file nghe/audio 1.wav", 
                subQuestions: [
                    { question: "What does she like?", options: ["Coffee", "Tea", "Milk"], answer: "Coffee" },
                    { question: "What time is it?", options: ["7 AM", "8 AM", "9 AM"], answer: "8 AM" }
                ]
            },
            {
                type: "doc_hieu",
                passage: "Mary loves traveling. She has visited many countries, including France, Japan, and Australia.",
                subQuestions: [
                    { question: "Which countries has Mary visited?", options: ["France", "Germany", "Italy"], answer: "France" },
                    { question: "Does she like traveling?", options: ["Yes", "No"], answer: "Yes" }
                ]
            },
            {
                type: "phat_am",
                question: "Chọn từ có phần gạch chân phát âm khác.",
                options: ["C_oo_l", "B_oo_k", "F_oo_d"],
                answer: "B_oo_k"
            }
        ]
,
                "Đề 2": [
                    { type: "tracnghiem", question: "I ________ to university next year.", options: ["go", "will go", "going"], answer: "will go" },
                    { type: "dienchu", question: "He _______ (have) breakfast at thís time tormorrow.", answer: "is having" },
                    { type: "tracnghiem", question: "Voi often _________ basketball once a week.", options: ["plays", "playing", "play"], answer: "plays" }
                ]
            }
        }
    }
};
vocabulary:{

};
writing:{

};
listening:{

};
reading:{

};


let currentExercise = [];

function showChapters(subject) {
const subjectData = exerciseData[subject.toLowerCase()];
const chapters = subjectData ? Object.keys(subjectData) : [];
const contentDiv = document.querySelector('.content');

contentDiv.innerHTML = `<h2>${subject}</h2><ul></ul>`;

const ul = contentDiv.querySelector('ul');
if (chapters.length === 0) {
ul.innerHTML = `<li>Không có chương nào.</li>`;
} else {
chapters.forEach(chapter => {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="#" onclick="showLessons('${subject}', '${chapter}')">${chapter}</a>
        <button onclick="editChapter('${subject}', '${chapter}')">Sửa</button>
        <button class="delete-btn" onclick="deleteChapter('${subject}', '${chapter}')">Xóa</button>
    `;
    ul.appendChild(li);
});
}

contentDiv.innerHTML += `<button class="add-btn" onclick="addChapter('${subject}')">Thêm Chương</button>`;
}

function showLessons(subject, chapter) {
const lessons = Object.keys(exerciseData[subject.toLowerCase()][chapter]);
const contentDiv = document.querySelector('.content');
contentDiv.innerHTML = `<h2>${chapter}</h2>
                    <button class="add-btn" onclick="addLesson('${subject}', '${chapter}')">Thêm Bài</button>
                    <ul></ul>`;

const ul = contentDiv.querySelector('ul');
lessons.forEach(lesson => {
const li = document.createElement('li');
li.innerHTML = `
    <div>
        <a href="#" onclick="showExercises('${subject}', '${chapter}', '${lesson}')">${lesson}</a>
        <div>
            <button class="delete-btn" onclick="deleteLesson('${subject}', '${chapter}', '${lesson}')">Xóa</button>
        </div>
    </div>
`;
ul.appendChild(li);
});
}

function showExercises(subject, chapter, lesson) {
const exercises = Object.keys(exerciseData[subject.toLowerCase()][chapter][lesson]);
const contentDiv = document.querySelector('.content');
contentDiv.innerHTML = `<h2>${lesson}</h2>
                    <button class="add-btn" onclick="addExercise('${subject}', '${chapter}', '${lesson}')">Thêm Đề</button>
                    <ul></ul>`;

const ul = contentDiv.querySelector('ul');
exercises.forEach(exercise => {
const li = document.createElement('li');
li.innerHTML = `
    <div>
        <a href="#" onclick="showExerciseDetail('${subject}', '${chapter}', '${lesson}', '${exercise}')">${exercise}</a>
        <div>
            <button class="delete-btn" onclick="deleteExercise('${subject}', '${chapter}', '${lesson}', '${exercise}')">Xóa</button>
        </div>
    </div>
`;
ul.appendChild(li);
});
}

function showExerciseDetail(subject, chapter, lesson, exercise) {
currentExercise = exerciseData[subject.toLowerCase()][chapter][lesson][exercise];

const exerciseDiv = document.querySelector('.exercise');
exerciseDiv.innerHTML = `
<h2>${exercise}</h2>
<button onclick="renderExercise('${subject}', '${chapter}', '${lesson}', '${exercise}', 'edit')">Chỉnh sửa</button>
<button onclick="renderExercise('${subject}', '${chapter}', '${lesson}', '${exercise}', 'do')">Làm bài</button>
<div id="exercise-content"></div>
`;

// Mặc định hiển thị chế độ làm bài
renderExercise(subject, chapter, lesson, exercise, 'do');

// Kiểm tra nếu không có câu hỏi
if (currentExercise.length === 0) {
document.getElementById('exercise-content').innerHTML = `<p>Không có câu hỏi nào trong đề này.</p>`;
} else {
renderExercise(subject, chapter, lesson, exercise, 'do');
}
}

function renderExercise(subject, chapter, lesson, exercise, mode) {
const container = document.getElementById('exercise-content');
container.innerHTML = ""; // Xóa nội dung cũ

currentExercise.forEach((ex, index) => {

if (mode === 'do') {
    if (ex.type === "tracnghiem") {
        container.innerHTML += `
            <div class="question">
                <p><strong>Câu ${index + 1}:</strong> ${ex.question}</p>
                <ul>
                    ${ex.options.map(option => `<li><input type="radio" name="q${index}" value="${option}"> ${option}</li>`).join('')}
                </ul>
            </div>
        `;
    } else if (ex.type === "dienchu") {
        container.innerHTML += `
            <div class="question">
                <p><strong>Câu ${index + 1}:</strong> ${ex.question}</p>
                <input type="text" name="q${index}" style="width: 100%;">
            </div>
        `;
    } else if (ex.type === "audio") {
        container.innerHTML += `
            <div class="question">
                <p><strong>Câu ${index + 1}:</strong> ${ex.question}</p>
                <audio controls>
                    <source src="${ex.audio}" type="audio/mpeg">
                    Trình duyệt của bạn không hỗ trợ phát audio.
                </audio>
                ${ex.subQuestions.map((sub, i) => `
                    <p><strong>Câu ${index + 1}.${i + 1}:</strong> ${sub.question}</p>
                    <ul>
                        ${sub.options.map(option => `<li><input type="radio" name="q${index}-${i}" value="${option}"> ${option}</li>`).join('')}
                    </ul>
                `).join('')}
            </div>
        `;
    } else if (ex.type === "doc_hieu") {
        container.innerHTML += `
            <div class="question">
                <p><strong>Bài đọc:</strong> ${ex.passage}</p>
                ${ex.subQuestions.map((sub, i) => `
                    <p><strong>Câu ${index + 1}.${i + 1}:</strong> ${sub.question}</p>
                    <ul>
                        ${sub.options.map(option => `<li><input type="radio" name="q${index}-${i}" value="${option}"> ${option}</li>`).join('')}
                    </ul>
                `).join('')}
            </div>
        `;
    } else if (ex.type === "phat_am") {
        container.innerHTML += `
            <div class="question">
                <p><strong>Câu ${index + 1}:</strong> ${ex.question}</p>
                <ul>
                    ${ex.options.map(option => `<li><input type="radio" name="q${index}" value="${option}"> ${option}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}
});

if (mode === 'do') {
container.innerHTML += `<button onclick="submitExercise()">Nộp bài</button>`;
}

if (mode === 'edit') {
currentExercise.forEach((ex, index) => {
    let questionHTML = `<div class="question" style="border-bottom: 1px solid #ddd; margin-bottom: 20px; padding-bottom: 10px;">
        <p><strong>Câu ${index + 1}:</strong></p>
        <input type="text" id="q${index}-question" value="${ex.question}" placeholder="Nhập câu hỏi" style="width: 100%; margin-bottom: 10px;">`;

    if (ex.type === 'tracnghiem' || ex.type === 'phat_am') {
        ex.options.forEach((option, i) => {
            questionHTML += `<input type="text" id="q${index}-option-${i}" value="${option}" placeholder="Đáp án ${i + 1}" style="width: 80%; margin-bottom: 5px;"><br>`;
        });
        questionHTML += `<input type="text" id="q${index}-answer" value="${ex.answer}" placeholder="Đáp án đúng" style="width: 100%; margin-top: 10px;">`;

    } else if (ex.type === 'dienchu') {
        questionHTML += `<input type="text" id="q${index}-answer" value="${ex.answer}" placeholder="Đáp án đúng" style="width: 100%; margin-top: 10px;">`;

    } else if (ex.type === 'doc_hieu') {
        questionHTML += `<textarea id="q${index}-passage" style="width: 100%; height: 100px; margin-bottom: 10px;" placeholder="Nhập đoạn văn">${ex.passage}</textarea>`;

        ex.subQuestions.forEach((sub, i) => {
            questionHTML += `
                <div style="margin-bottom: 15px; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
                    <input type="text" id="q${index}-subquestion-${i}" value="${sub.question}" placeholder="Nhập câu hỏi con" style="width: 100%; margin-bottom: 5px;">
                    <input type="text" id="q${index}-subanswer-${i}" value="${sub.answer}" placeholder="Đáp án đúng" style="width: 100%; margin-bottom: 5px;">
                    <input type="text" id="q${index}-suboptions-${i}" value="${sub.options.join(', ')}" placeholder="Các đáp án còn lại, cách nhau bởi dấu phẩy" style="width: 100%; margin-bottom: 10px;">
                    <button class="delete-btn" onclick="deleteSubQuestion(${index}, ${i}, '${subject}', '${chapter}', '${lesson}', '${exercise}')">Xóa Câu Hỏi Con</button>
                </div>`;
        });

        questionHTML += `<button class="add-btn" onclick="addSubQuestion(${index}, '${subject}', '${chapter}', '${lesson}', '${exercise}')">Thêm Câu Hỏi Con</button>`;

    } else if (ex.type === 'audio') {
        questionHTML += `
            <input type="file" id="q${index}-audio" accept="audio/*" style="margin-bottom: 10px;">
            <audio controls src="${ex.audio}" style="display: block; margin-bottom: 10px;"></audio>`;

        ex.subQuestions.forEach((sub, i) => {
            questionHTML += `
                <div style="margin-bottom: 15px; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
                    <input type="text" id="q${index}-subquestion-${i}" value="${sub.question}" placeholder="Nhập câu hỏi con" style="width: 100%; margin-bottom: 5px;">
                    <input type="text" id="q${index}-subanswer-${i}" value="${sub.answer}" placeholder="Đáp án đúng" style="width: 100%; margin-bottom: 5px;">
                    <input type="text" id="q${index}-suboptions-${i}" value="${sub.options.join(', ')}" placeholder="Các đáp án còn lại, cách nhau bởi dấu phẩy" style="width: 100%; margin-bottom: 10px;">
                    <button class="delete-btn" onclick="deleteSubQuestion(${index}, ${i}, '${subject}', '${chapter}', '${lesson}', '${exercise}')">Xóa Câu Hỏi Con</button>
                </div>`;
        });

        questionHTML += `<button class="add-btn" onclick="addSubQuestion(${index}, '${subject}', '${chapter}', '${lesson}', '${exercise}')">Thêm Câu Hỏi Con</button>`;
    }

    questionHTML += `
        <button class="delete-btn" onclick="deleteQuestion(${index}, '${subject}', '${chapter}', '${lesson}', '${exercise}')">Xóa Câu Hỏi</button>
    </div>`;

    container.innerHTML += questionHTML;
});



container.innerHTML += `
<button class="add-btn" onclick="openAddQuestionModal()">Thêm Câu Hỏi</button>
<button onclick="saveAllQuestions('${subject}', '${chapter}', '${lesson}', '${exercise}')">Lưu Tất Cả</button>
`;
}
}

function addSubQuestion(index, subject, chapter, lesson, exercise) {
const newSubQuestion = { question: "", options: [], answer: "" };

if (!currentExercise[index].subQuestions) {
currentExercise[index].subQuestions = [];
}

currentExercise[index].subQuestions.push(newSubQuestion);
renderExercise(subject, chapter, lesson, exercise, 'edit');
}

function deleteSubQuestion(index, subIndex, subject, chapter, lesson, exercise) {
if (confirm(`Bạn có chắc chắn muốn xóa câu hỏi con số ${subIndex + 1} không?`)) {
currentExercise[index].subQuestions.splice(subIndex, 1);
renderExercise(subject, chapter, lesson, exercise, 'edit');
}
}

let currentSubject = "";
let currentChapter = "";
let currentLesson = "";
let currentExerciseName = "";

function addQuestion(subject, chapter, lesson, exercise) {
openAddQuestionModal();
currentSubject = subject;
currentChapter = chapter;
currentLesson = lesson;
currentExerciseName = exercise;
}

function deleteQuestion(index, subject, chapter, lesson, exercise) {
if (confirm(`Bạn có chắc chắn muốn xóa câu hỏi số ${index + 1} không?`)) {
currentExercise.splice(index, 1);
renderExercise(subject, chapter, lesson, exercise, 'edit');
}
}

function submitExercise() {
let score = 0;
let resultHTML = "<h3>Kết quả:</h3><ul>";

currentExercise.forEach((ex, index) => {
if (ex.type === "tracnghiem" || ex.type === "phat_am") {
    const userAnswer = document.querySelector(`[name="q${index}"]:checked`)?.value || "";
    if (userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase()) {
        score++;
        resultHTML += `<li>Câu ${index + 1}: Đúng</li>`;
    } else {
        resultHTML += `<li>Câu ${index + 1}: Sai (Đáp án đúng: ${ex.answer})</li>`;
    }
} else if (ex.type === "dienchu") {
    const userAnswer = document.querySelector(`[name="q${index}"]`)?.value || "";
    if (userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase()) {
        score++;
        resultHTML += `<li>Câu ${index + 1}: Đúng</li>`;
    } else {
        resultHTML += `<li>Câu ${index + 1}: Sai (Đáp án đúng: ${ex.answer})</li>`;
    }
} else if (ex.type === "audio" || ex.type === "doc_hieu") {
    ex.subQuestions.forEach((sub, i) => {
        const userAnswer = document.querySelector(`[name="q${index}-${i}"]:checked`)?.value || "";
        if (userAnswer.trim().toLowerCase() === sub.answer.trim().toLowerCase()) {
            score++;
            resultHTML += `<li>Câu ${index + 1}.${i + 1}: Đúng</li>`;
        } else {
            resultHTML += `<li>Câu ${index + 1}.${i + 1}: Sai (Đáp án đúng: ${sub.answer})</li>`;
        }
    });
}
});

resultHTML += `</ul><p>Điểm của bạn: ${score}/${getTotalQuestions()}</p>`;
document.querySelector('.exercise').innerHTML += `<div class="result">${resultHTML}</div>`;
}

// Hàm tính tổng số câu hỏi
function getTotalQuestions() {
let total = 0;
currentExercise.forEach((ex) => {
if (ex.type === "audio" || ex.type === "doc_hieu") {
    total += ex.subQuestions.length;
} else {
    total += 1;
}
});
return total;
}

// Thêm Chương
function addChapter(subject) {
const chapterName = prompt("Nhập tên chương mới:");
if (chapterName) {
exerciseData[subject.toLowerCase()][chapterName] = {};
saveDataToLocalStorage();
showChapters(subject);
}
}

function saveAllQuestions(subject, chapter, lesson, exercise) {
currentExercise.forEach((ex, index) => {
ex.question = document.getElementById(`q${index}-question`)?.value || "";

if (ex.type === 'tracnghiem' || ex.type === 'phat_am') {
    ex.options = [];
let i = 0;
while (document.getElementById(`q${index}-option-${i}`)) {
    ex.options.push(document.getElementById(`q${index}-option-${i}`).value.trim());
    i++;
}
ex.answer = document.getElementById(`q${index}-answer`)?.value.trim() || "";

    ex.answer = document.getElementById(`q${index}-answer`)?.value || "";
} else if (ex.type === 'dienchu') {
    ex.answer = document.getElementById(`q${index}-answer`)?.value || "";
} else if (ex.type === 'doc_hieu' || ex.type === 'audio') {
    // Cập nhật các câu hỏi con
    ex.subQuestions = [];
    let i = 0;
    while (document.getElementById(`q${index}-subquestion-${i}`)) {
        const subQuestion = document.getElementById(`q${index}-subquestion-${i}`).value || "";
        const subAnswer = document.getElementById(`q${index}-subanswer-${i}`).value || "";
        const subOptions = document.getElementById(`q${index}-suboptions-${i}`).value.split(',').map(opt => opt.trim()) || [];

        ex.subQuestions.push({ question: subQuestion, options: subOptions, answer: subAnswer });
        i++;
    }
}
});

// Lưu lại vào exerciseData
exerciseData[subject.toLowerCase()][chapter][lesson][exercise] = currentExercise;
saveDataToLocalStorage();
alert("Đã lưu tất cả thay đổi.");
renderExercise(subject, chapter, lesson, exercise, 'do');
}

function editChapter(subject, oldChapterName) {
const newChapterName = prompt("Nhập tên mới cho chương:", oldChapterName);
if (newChapterName && newChapterName !== oldChapterName) {
exerciseData[subject.toLowerCase()][newChapterName] = exerciseData[subject.toLowerCase()][oldChapterName];
delete exerciseData[subject.toLowerCase()][oldChapterName];
showChapters(subject);
}
}

function deleteChapter(subject, chapterName) {
if (confirm(`Bạn có chắc chắn muốn xóa chương "${chapterName}" không?`)) {
delete exerciseData[subject.toLowerCase()][chapterName];
saveDataToLocalStorage();
showChapters(subject);
}
}

// Thêm Bài
function addLesson(subject, chapter) {
const newLesson = prompt("Nhập tên bài mới:");
if (newLesson) {
exerciseData[subject.toLowerCase()][chapter][newLesson] = {};
alert(`Bài "${newLesson}" đã được thêm.`);
saveDataToLocalStorage();
showLessons(subject, chapter);
}
}

// Xóa Bài
function deleteLesson(subject, chapter, lesson) {
if (confirm(`Bạn có chắc chắn muốn xóa bài "${lesson}" không?`)) {
delete exerciseData[subject.toLowerCase()][chapter][lesson];
alert(`Bài "${lesson}" đã được xóa.`);
saveDataToLocalStorage();
showLessons(subject, chapter);
}
}

// Thêm Đề
function addExercise(subject, chapter, lesson) {
const newExercise = prompt("Nhập tên đề mới:");
if (newExercise) {
exerciseData[subject.toLowerCase()][chapter][lesson][newExercise] = [];
alert(`Đề "${newExercise}" đã được thêm.`);
saveDataToLocalStorage();
showExercises(subject, chapter, lesson);
}
}

// Xóa Đề
function deleteExercise(subject, chapter, lesson, exercise) {
if (confirm(`Bạn có chắc chắn muốn xóa đề "${exercise}" không?`)) {
delete exerciseData[subject.toLowerCase()][chapter][lesson][exercise];
alert(`Đề "${exercise}" đã được xóa.`);
saveDataToLocalStorage();
showExercises(subject, chapter, lesson);
}
}

function openAddQuestionModal() {
console.log("currentExercise:", currentExercise);
document.getElementById('addQuestionModal').style.display = 'block';
}

function closeModal() {
document.getElementById('addQuestionModal').style.display = 'none';
document.getElementById('questionType').value = "";
document.getElementById('questionFields').innerHTML = "";
}

function showQuestionFields() {
const questionType = document.getElementById('questionType').value;
const fieldsDiv = document.getElementById('questionFields');
fieldsDiv.innerHTML = "";

if (questionType === "tracnghiem" || questionType === "phat_am") {
fieldsDiv.innerHTML = `
    <input type="text" id="newQuestionText" placeholder="Nhập câu hỏi" style="width: 100%; margin-bottom: 10px;">
    <input type="text" id="newOptions" placeholder="Nhập các đáp án, cách nhau bởi dấu phẩy" style="width: 100%; margin-bottom: 10px;">
    <input type="text" id="newAnswer" placeholder="Nhập đáp án đúng" style="width: 100%; margin-bottom: 10px;">
`;
} else if (questionType === "dienchu") {
fieldsDiv.innerHTML = `
    <input type="text" id="newQuestionText" placeholder="Nhập câu hỏi" style="width: 100%; margin-bottom: 10px;">
    <input type="text" id="newAnswer" placeholder="Nhập đáp án" style="width: 100%; margin-bottom: 10px;">
`;
} else if (questionType === "audio") {
fieldsDiv.innerHTML = `
    <input type="text" id="newQuestionText" placeholder="Nhập câu hỏi" style="width: 100%; margin-bottom: 10px;">
    <input type="file" id="newAudioFile" accept="audio/*" style="margin-bottom: 10px;">
`;
} else if (questionType === "doc_hieu") {
fieldsDiv.innerHTML = `
    <textarea id="newPassage" placeholder="Nhập đoạn văn" style="width: 100%; height: 100px; margin-bottom: 10px;"></textarea>
`;
}
}

function addNewQuestion() {
const questionType = document.getElementById('questionType').value;
const newQuestionText = document.getElementById('newQuestionText')?.value;
const newOptions = document.getElementById('newOptions')?.value.split(",");
const newAnswer = document.getElementById('newAnswer')?.value;
const newPassage = document.getElementById('newPassage')?.value;
const newAudioFile = document.getElementById('newAudioFile')?.files[0];
const newAudioPath = newAudioFile ? URL.createObjectURL(newAudioFile) : null;

let newQuestion = {};

if (questionType === "tracnghiem" || questionType === "phat_am") {
newQuestion = { type: questionType, question: newQuestionText, options: newOptions, answer: newAnswer };
} else if (questionType === "dienchu") {
newQuestion = { type: questionType, question: newQuestionText, answer: newAnswer };
} else if (questionType === "audio") {
newQuestion = { type: questionType, question: newQuestionText, audio: newAudioPath, subQuestions: [] };
} else if (questionType === "doc_hieu") {
newQuestion = { type: questionType, passage: newPassage, subQuestions: [] };
}

if (currentExercise) {
currentExercise.push(newQuestion);
console.log("Câu hỏi mới đã được thêm:", newQuestion);
} else {
console.error("currentExercise không được gán đúng.");
}

closeModal();
renderExercise(currentSubject, currentChapter, currentLesson, currentExerciseName, 'edit');
}

const currentUser = localStorage.getItem('currentUser');

// Function to save exercise data by user
function saveExerciseData(subject, chapter, lesson, exercise, data) {
  if (currentUser) {
    let userData = JSON.parse(localStorage.getItem(currentUser)) || {};
    userData.exercises = userData.exercises || {};
    userData.exercises[subject] = userData.exercises[subject] || {};
    userData.exercises[subject][chapter] = userData.exercises[subject][chapter] || {};
    userData.exercises[subject][chapter][lesson] = userData.exercises[subject][chapter][lesson] || {};
    userData.exercises[subject][chapter][lesson][exercise] = data;
    localStorage.setItem(currentUser, JSON.stringify(userData));
  } else {
    alert('Bạn cần đăng nhập để lưu bài tập.');
    window.location.href = 'Đăng nhập.html';
  }
}

// Function to load exercise data for the current user
function loadExerciseData(subject, chapter, lesson, exercise) {
  if (currentUser) {
    let userData = JSON.parse(localStorage.getItem(currentUser)) || {};
    return userData.exercises?.[subject]?.[chapter]?.[lesson]?.[exercise] || null;
  }
  return null;
}

function resetData() {
localStorage.removeItem('exerciseData');
location.reload();
}

function saveDataToLocalStorage() {
localStorage.setItem('exerciseData', JSON.stringify(exerciseData));
console.log("Dữ liệu đã được lưu vào Local Storage:", exerciseData);
}

function loadDataFromLocalStorage() {
const savedData = localStorage.getItem('exerciseData');
if (savedData) {
exerciseData = JSON.parse(savedData); // Chỉ gán được nếu exerciseData khai báo bằng let
}
}

if (!localStorage.getItem('loggedIn')) {
    alert('Bạn cần đăng nhập để truy cập trang này.');
    window.location.href = 'Đăng nhập.html';
  }

window.onload = function() {
loadDataFromLocalStorage();
};
