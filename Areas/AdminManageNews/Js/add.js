// Khởi tạo Quill Editor
var quill = new Quill("#editor", {
  theme: "snow",
});

// Lấy nội dung khi nhấn nút
document.getElementById("submitBtn").addEventListener("click", function () {
  const content = quill.root.innerHTML; // Lấy nội dung HTML

  // Bạn có thể xử lý nội dung ở đây, ví dụ gửi đến server
  $(".content-input").html(content);
  let valueImage = $("#valueImage").val();
  let titleText = $("#titleText").val();

  var reqData = {
    Title: titleText,
    TitleImageUrl: valueImage,
    NewsContent: content
  };

  console.log(reqData);

});

var AddImage = function (el) {
  $(el).siblings("input[type=file]").click();
};

var AddImage_OnChange = function (el) {
  var files = el.files;

  var reader = new FileReader();

  reader.onloadend = function (event) {
    var imageDataUrl = event.currentTarget.result;
    var imageData = event.currentTarget.result.substring(
      event.currentTarget.result.indexOf(",") + 1,
      event.currentTarget.result.length
    );
    //dữ liệu chuẩn base64
    $(el)
      .siblings("input[type=hidden]")
      .val(
        event.currentTarget.result.substring(
          event.currentTarget.result.indexOf(",") + 1,
          event.currentTarget.result.length
        )
      );

    //hiển thị preview
    $(el)
      .siblings(".preview")
      .css("background-image", `url(${event.currentTarget.result})`);
  };
  reader.readAsDataURL(files[0]);

  $(el).val("");
};