const addNews = function () {
  window.location.href = "/Areas/AdminManageNews/Views/add.html";
};

const initPage = async function () {
  const rs = await SendGetRequest(`News/GetListNews`);
  if (rs.status == "success") {
    const tbody = $("#productTableBody");
    tbody.empty(); // Xóa nội dung cũ

    rs.data.forEach((product) => {
      const row = `
                <tr>
                    <td>
                        <i class="fa-solid fa-trash-can" style="cursor: pointer;" onclick="deleteNews('${
                          product.id
                        }')"></i>
                        
                    </td>
                    <td>${product.title}</td>
                    <td><div class="preview"
                    style="background-image: url('${GetShareImage(
                      product.titleImageUrl
                    )}');"></div></td>
                    <td class="news-content">${product.newsContent.replace(
                      /<\/?p[^>]*>/g,
                      ""
                    )}</td>
                </tr>
            `;
      tbody.append(row);
    });
  }
};

const deleteNews = async function (id) {
  checkCookie();
  // Xác nhận trước khi xóa
  if (!confirm("Bạn có chắc chắn muốn xóa tin tức này không?")) {
    return;
  }

  const rs = await SendGetRequest(`News/DeleteNews?Id=${id}`);
  if (rs.status == "success") {
    alert("Xóa thành công!");
    initPage();
  }
};

const checkCookie = async function () {
  var cookie = getCookie("user_cookie");
  if (!cookie) {
    window.location.href = "/Areas/Login/Views/index.html";
  }

  const rs = await SendGetRequest(
    `UserToken/CheckUserByCookie?cookie=` + cookie
  );
  if (rs.status != "success") {
    window.location.href = "/Areas/Login/Views/index.html";
  }
};

initPage();
