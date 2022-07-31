
// querySelector and querySelectorAll
const para = document.querySelectorAll('p');
para.forEach(para=>{
    console.log(para.innerText);
});
// console.log(para)


// const tags = document.querySelectorAll('div');

// console.log(tags[1]);

// const error = document.querySelectorAll('.error');

// console.log(error)

const hereby = document.querySelectorAll('div');
hereby.forEach(hereby=>{
    console.log(hereby.innerText);
    hereby.innerText += 'Hello'
});

// console.log(hereby.innerText);

// changing the CONTENT_MODE

const content = document.querySelector('.errors');

content.innerHTML = '<h2>THIS IS A NEW HTML</h2>'