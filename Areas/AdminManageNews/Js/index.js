const addNews = function () {
  window.location.href = "/Areas/AdminManageNews/Views/add.html";
};

const initPage = async function () {
  const rs = await SendGetRequest(`News/GetListNews`);
  if (rs.status == "success") {
    const tbody = $("#productTableBody");
    tbody.empty(); // Xóa nội dung cũ
    console.log(rs.data);

    rs.data.forEach((product) => {
      const row = `
                <tr>
                    <td>
                        <i class="fa-solid fa-trash-can" style="cursor: pointer;" onclick="deleteProduct('${product.id}')"></i>
                        <i class="fa-solid fa-pen-to-square" style="cursor: pointer;" onclick="openEditModal('${product.id}')"></i>
                    </td>
                    <td>${product.title}</td>
                    <td><div class="preview"
                    style="background-image: url('${GetShareImage(product.titleImageUrl)}');"></div></td>
                    <td class="news-content">${product.newsContent.replace(/<\/?p[^>]*>/g, '')}</td>
                </tr>
            `;
      tbody.append(row);
    });
  }
};

initPage();