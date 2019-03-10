app.factory("userSrv", function ($http, $q, $log) {

    // var activeUser = null;

    // function User(parseUser) {
    //     this.username = parseUser.get("username");
    //     this.name = parseUser.get("name");
    //     this.email = parseUser.get("email");
    //     this.password = parseUser.get("password");
    // }

    // function login(username, name, email, password) {
    //     var async = $q.defer();


    //     // Pass the username and password to logIn function
    //     Parse.User.logIn(username, name, email, password).then(function (user) {
    //         // Do stuff after successful login
    //         $log.info('Logged in user', user);
    //         activeUser = new User(user);
    //         async.resolve(activeUser);
    //     }).catch(function (error) {
    //         $log.error('Error while logging in user', error);
    //         async.reject(error);
    //     });

    //     return async.promise;
    // }

    // function isLoggedIn() {
    //     return activeUser ? true : false;
    // }

    // function logout() {
    //     activeUser = null;
    // }

    // function getActiveUser() {
    //     return activeUser;
    // }


    //Sign up:
    const user = new Parse.User()
    user.set('username', username);
    user.set('email', email);
    user.set('name', name);
    user.set('password', password);

    user.signUp().then((user) => {
        if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
        console.log('User signed up', user);
    }).catch(error => {
        if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
        console.error('Error while signing up user', error);
    });


    return {
        login: login,
        // isLoggedIn: isLoggedIn,
        // logout: logout,
        // getActiveUser: getActiveUser,
        // signUp: signUp
    }



});