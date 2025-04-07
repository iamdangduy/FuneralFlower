

var app = angular.module("myLogin", []);

app.controller("myLoginCtrl", function ($scope) {
    $scope.item = {};

    $scope.setCookie = function(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    $scope.login = async function (objItem) {
        const rs = await SendPostRequest(`User/Login`, objItem);
        if (rs.status == 'success') {
            if (rs.data.token) {
                $scope.setCookie('user_cookie', rs.data.token);
                window.location.href = "/Areas/AdminManageProduct/Views/index.html";
            }
        }
    }
});