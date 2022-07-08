// MODAL 1
let modalTriger = document.querySelector('#formTriger');
let modalForm = document.querySelector('#signForm')
let modalContent = document.querySelector('#signForm > .modal_sign_content')

modalTriger.addEventListener('click',function(){
    signForm.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    setTimeout(function(){
        modalContent.style.top = '0';
    },100)
})

modalForm.addEventListener('click', function(e){
    if(e.target == modalForm){
        setTimeout(function(){
            modalForm.style.display = 'none';
            document.body.style.overflowY = 'scroll';
        },300)
        modalContent.style.top = '-60%'
        
    }
})


// // nav bar

let loopClick = document.querySelector('#loop')

loopClick.addEventListener('click',function(){
    loopClick.classList.toggle('active')
})
let navBurger = document.querySelector('.nav_burger')
let navList = document.querySelector('.nav_list')
navBurger.addEventListener('click',function(){
    navList.classList.toggle('active')

})
window.addEventListener('scroll' ,function(){
    navList.classList.remove('active')
})
// let navHidden = document.querySelector('nav');

// window.addEventListener('scroll',function(){
//     if(document.documentElement.scrollTop >= 100){
//         navHidden.style.backgroundColor = 'transparent'
//     }
//     else{
//         navHidden.style.backgroundColor = 'white'
//     }
// })

// TEAM SLIDER

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 60,
    
  });




