// Lấy URL hiện tại
const currentPath = window.location.pathname;
console.log(currentPath);

// Thêm class active dựa trên đường dẫn
if (currentPath === '/index.html') {
    document.getElementById('home').classList.add('active');
} else if (currentPath.includes('Areas/Products/Views/index.html')) {
    document.getElementById('flowers').classList.add('active');
} else if (currentPath.includes('tel:0876526226')) {
    document.getElementById('contact').classList.add('active');
}