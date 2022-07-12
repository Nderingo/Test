// Object literals

let user = {
    name: 'John',
    lastName: 'John',
    age: 36,
    email: 'john@example.com',
    location:'renton',
    siblings: ['Amani','Inno','Furaha','Neema'],
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
}

user.age = 40
console.log(user);
console.log(user.age)
user['name'] = 'Doe';
console.log(user.name);
console.log(user['location']);


user.login();
user.logout();