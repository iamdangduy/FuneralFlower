// Khởi tạo Quill Editor
var quill = new Quill("#editor", {
  theme: "snow",
});

// Lấy nội dung khi nhấn nút
document.getElementById("submitBtn").addEventListener("click", function () {
  const content = quill.root.innerHTML; // Lấy nội dung HTML
  console.log("Nội dung:", content); // Hiển thị trong console

  // Bạn có thể xử lý nội dung ở đây, ví dụ gửi đến server
  $(".content-input").html(content);
});
