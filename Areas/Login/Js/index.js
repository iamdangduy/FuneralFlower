

var app = angular.module("myLogin", []);

app.controller("myLoginCtrl", function ($scope) {
    $scope.item = {};

    $scope.login = async function (objItem) {
        const rs = await SendPostRequest(`User/Login`, objItem);
        console.log(rs);
    }
});