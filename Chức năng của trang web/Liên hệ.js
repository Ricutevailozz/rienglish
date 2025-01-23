

    document.getElementById("diennoidung").addEventListener("submit", function(event) {
      event.preventDefault(); 
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
      document.getElementById("diennoidung").reset();
    });

    if (!localStorage.getItem('loggedIn')) {
      alert('Bạn cần đăng nhập để truy cập trang này.');
      window.location.href = 'Đăng nhập.html';
    }
