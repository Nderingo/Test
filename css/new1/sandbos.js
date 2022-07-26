
// querySelector and querySelectorAll
const para = document.querySelectorAll('p');
para.forEach(para=>{
    console.log(para);
});
// console.log(para)


const tags = document.querySelectorAll('div');

console.log(tags[1]);

// const error = document.querySelectorAll('.error');

// console.log(error)

const errors = document.getElementsByClassName('error');

console.log(errors)