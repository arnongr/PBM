
// app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {


//     //Login:
// // Pass the username and password to logIn function
// Parse.User.logIn("newUserName","#Password123").then((user) => {
//     // Do stuff after successful login
//     if (typeof document !== 'undefined') document.write(`Logged in user: ${JSON.stringify(user)}`);
//     console.log('Logged in user', user);
//   }).catch(error => {
//     if (typeof document !== 'undefined') document.write(`Error while logging in user: ${JSON.stringify(error)}`);
//     console.error('Error while logging in user', error);
//   })


//     //redirect to 'Workspace' page after login:
//     $scope.login = function () {

//         userSrv.login($scope.email, $scope.pwd).then(function (activeUser) {
//             $location.path("/workSpace");
//         }, function () {
//             $scope.invalidLogin = true;
//         });

//     }



// })