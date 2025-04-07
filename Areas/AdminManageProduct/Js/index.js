var app = angular.module("myManageProduct", []);

app.controller("myManageProductCtrl", function ($scope) {
    const modal = document.getElementById("addProductModal");
    const btn = document.getElementById("addProductBtn");
    const span = document.getElementById("closeModalBtn");
    const form = document.getElementById("addProductForm");

    // Hiển thị dialog khi nhấn nút
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Đóng dialog khi nhấn nút "x"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Đóng dialog khi nhấn ra ngoài dialog
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});