// Object literals

let user = {
    name: 'John',
    lastName: 'John',
    age: 36,
    email: 'john@example.com',
    location:'renton',
    siblings: [{ndugu:'Amani Inno Furaha Neema', average:30},
               {ndugu:'John Smith JUmara  Inno Vel', average:5}    
              ],

    login: function(){
        console.log('user logged in');
    },

    logout: function(){
        console.log('user logged out');
    },
    logSiblings: function(){
        // console.log(this.siblings);
        console.log('my siblings are');
        this.siblings.forEach(relative =>{
            console.log(relative.ndugu,relative.average);
        })

    
    
    }
}

// user.age = 40
console.log(user);
console.log(user.age)
// user['name'] = 'Doe';
// console.log(user.name);
// console.log(user['location']);


user.login();
user.logout();
user.logSiblings();




// Math Object
const random  = Math.random();

console.log(random);
console.log(Math.round(Math.random() * 50));


// primitive values

let scoreOne = 50
let scoreTwo = scoreOne;

console.log(`scoreOne:${scoreOne}`, `scoreTwo:${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne:${scoreOne}`, `scoreTwo:${scoreTwo}`);

// reference values

const userOne = {name:'Ally', age:40, location:'Renton'};
const userTwo = userOne;
console.log(userOne, userTwo);
