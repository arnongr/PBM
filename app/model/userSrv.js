app.factory("userSrv", function ($http, $q, $log) {

    var activeUser = null;

    function User(parseUser) {
        this.email = parseUser.get("email");
        this.password = parseUser.get("password");
    }

    function logIn(email, password) {
        var async = $q.defer();


        // Pass the username and password to logIn function
        Parse.User.logIn(email, password).then(function(user) {
            $log.info('Logged in user', user);
            activeUser = new User(user);
            async.resolve(activeUser);
        }).catch(function(error) {
            $log.error('Error while logging in user', error);
            async.reject(error);
        });

        return async.promise;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }


    return  {
        logIn: logIn,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser
    }


});