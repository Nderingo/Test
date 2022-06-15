// Object literals

let user = {
    name: 'John',
    age: 36,
    email: 'john@example.com',
    location:'renton',
    siblings: ['Amani','Inno','Furaha','Neema']
}

user.age = 40
console.log(user);
console.log(user.age)
user['name'] = 'Doe';
console.log(user.name);
console.log(user['location']);