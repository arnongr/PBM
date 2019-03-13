
app.controller("createUserCtrl", function ($scope, $location, $log) {


    $scope.signUp = function() {
        const user = new Parse.User()
        user.set('username', $scope.username);
        user.set('email', $scope.email);
        user.set('name', $scope.name);
        user.set('password', $scope.password);
        
        user.signUp().then((user) => {
            // success

            console.log('User signed up', user);
        }).catch(error => {
            // error
            console.error('Error while signing up user', error);
        });
        $location.path("projects");
    };
    



})