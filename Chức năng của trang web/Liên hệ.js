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

    document.getElementById("diennoidung").addEventListener("submit", function(event) {
      event.preventDefault(); 
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
      document.getElementById("diennoidung").reset();
    });

    if (!localStorage.getItem('loggedIn')) {
      alert('Bạn cần đăng nhập để truy cập trang này.');
      window.location.href = 'Đăng nhập.html';
    }
