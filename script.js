let post = document.querySelector('.post');
let postContainer = document.querySelector('.postContainer');
let likes = document.querySelector('#likes');
let counter = 0;

post.addEventListener('dblclick',function(event){
    let x = event.clientX;
    let y = event.clientY;
    let postLeft = event.target.parentElement.offsetLeft;
    let postTop = event.target.parentElement.offsetTop;


    x -= postLeft;
    y -= postTop;

    let heart = document.createElement('span');
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    heart.classList.add('heart');
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    postContainer.append(heart);
    counter++;
    likes.innerText = counter;

    setTimeout(function(){
        heart.style.fontSize = `8rem`;
        heart.style.opacity= 0;
    }, 10)
    setTimeout(function(){
        heart.remove();
    },510)
})