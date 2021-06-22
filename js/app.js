let myLogo = document.querySelector('.logo-img');
let linkContainer = document.querySelector('.link-container');

myLogo.addEventListener("click", function () {
    linkContainer.classList.toggle('active');
    if(linkContainer.classList.contains('active')){
        document.querySelector('header').style.backgroundColor = '#222';
    }else{
        document.querySelector('header').style.backgroundColor = 'transparent';
    }
})