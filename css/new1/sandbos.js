
// querySelector and querySelectorAll
const para = document.querySelectorAll('p');
para.forEach(para=>{
    console.log(para.innerText);
});
// console.log(para)


const tags = document.querySelectorAll('div');

console.log(tags[1]);

const error = document.querySelectorAll('.error');

// console.log(error)

const hereby = document.getElementsByClassName('.error');
hereby.forEach(hereby=>{
    console.log(hereby.innerText);
});

// console.log(hereby.innerText);